import './RecordDetails.scss';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/app/storeHooks';
import { RootState } from '@/app/storeTypes';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { RecordData } from '@/app/features/records/recordsTypes';
import { getAll } from '@/app/features/records/recordsThunks';
import { useAddClassNextFrame } from '@/utils/animation/useAddClassNextFrame';
import ErrorPage from '../error/ErrorPage';

/**
 *
 */
function RecordDetails(): JSX.Element {
    const dispatch = useAppDispatch();
    const params = useParams();
    const { items, status } = useAppSelector((state: RootState) => state.records);
    const itemData = items.find((item: RecordData) => item.id === params.id);
    const imgRef = useRef<HTMLDivElement | null>(null);
    const transition = { duration: 0.2, ease: 'easeOut' };
    const variantsOuter = { hidden: { scaleX: 0 }, show: { scaleX: 1, originX: 'left' } };
    const variantsInner = { hidden: { opacity: 0 }, show: { opacity: 1, transition } };
    const variantsDesc = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { ...transition, delay: 0.7 } },
    };
    const headers: JSX.Element[] = [
        <>
            <h3 className="album">{itemData?.album}</h3>
            <p className="artist">{itemData?.artist}</p>
        </>,
        <>{itemData?.year}</>,
        <>{itemData?.label}</>,
        <>Added: {itemData?.addedDate}</>,
    ];

    useAddClassNextFrame(imgRef, 'animate', status !== 'loading');

    /**
     *
     */
    useEffect(() => {
        if (items.length === 0) dispatch(getAll());
    }, []);

    /**
     *
     */
    function getTransitionOuter(): {
        ease: string;
        duration: number;
        delay: number;
        delayChildren: number;
    } {
        const duration = 0.1 + Math.random() * 0.2;
        const delay = 0.35 + Math.random() * 0.2;
        return {
            ...transition,
            duration,
            delay,
            delayChildren: duration + delay,
        };
    }

    /**
     *
     */
    function getHeader(children: JSX.Element, index: number): JSX.Element {
        return (
            <motion.div
                variants={variantsOuter}
                transition={getTransitionOuter()}
                className="header"
                style={{ backgroundColor: itemData?.colorTheme[index] }}
                key={index}
            >
                <motion.div variants={variantsInner}>{children}</motion.div>
            </motion.div>
        );
    }

    if (status !== 'loading' && !itemData)
        return <ErrorPage errorType="404" /* No item with ID found*/ />;

    return (
        <>
            {status !== 'loading' && itemData && (
                <div className="record-details">
                    <div>
                        <div ref={imgRef} className="card image">
                            <img src={itemData.cover} />
                        </div>
                    </div>
                    <motion.div initial="hidden" animate="show" className="details">
                        <div className="headers">{headers.map(getHeader)}</div>
                        <motion.div variants={variantsDesc} className="description">
                            <p>
                                <a href={itemData.discogsUrl} target="_blank">
                                    Discogs
                                </a>
                            </p>
                            <p>{itemData.description.text || 'No description available.'}</p>
                            {itemData.description.srcUrl && (
                                <p>
                                    <a href={itemData.description.srcUrl} target="_blank">
                                        Source
                                    </a>
                                </p>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </>
    );
}

export default RecordDetails;
