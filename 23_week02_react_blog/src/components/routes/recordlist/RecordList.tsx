import './RecordList.scss';
import { Link } from 'react-router-dom';
import { appRoutes } from '@/router/appRouterConfig';
import RecordListItem from '@/components/gui/recordlistitem/RecordListItem';
import { getAll } from '@/app/features/records/recordsThunks';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/storeHooks';
import { RootState } from '@/app/storeTypes';
import { RecordData } from '@/app/features/records/recordsTypes';
import { motion } from 'framer-motion';

/**
 *
 */
function RecordList(): JSX.Element {
    const dispatch = useAppDispatch();
    const { items, status } = useAppSelector((state: RootState) => state.records);
    const variants = {
        show: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.1,
            },
        },
    };

    /**
     *
     */
    useEffect(() => {
        dispatch(getAll());
    }, []);

    return (
        <div className="container-responsive record-list">
            <motion.div
                initial="hidden"
                animate={status !== 'loading' ? 'show' : ''}
                variants={variants}
                className="record-list-items"
            >
                {items.map(
                    (itemData: RecordData): JSX.Element => (
                        <Link to={appRoutes.RECORD_DETAILS + itemData.id} key={itemData.id}>
                            <RecordListItem {...itemData} key={itemData.id} />
                        </Link>
                    )
                )}
            </motion.div>
        </div>
    );
}

export default RecordList;
