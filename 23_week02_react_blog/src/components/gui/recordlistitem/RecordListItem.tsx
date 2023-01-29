import './RecordListItem.scss';
import { RecordData } from '@/app/features/records/recordsTypes';
import { motion } from 'framer-motion';

/**
 *
 */
function RecordListItem(itemData: RecordData): JSX.Element {
    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    };
    const sections: JSX.Element[] = [
        <>
            <p className="font-bold elipsis-one-line">{itemData.album}</p>
            <p className="elipsis-one-line">{itemData.artist}</p>
        </>,
        <>{itemData.year}</>,
        <> {itemData.label}</>,
        <>Added: {itemData.addedDate}</>,
    ];

    /**
     *
     */
    function getSection(children: JSX.Element, index: number): JSX.Element {
        return (
            <div className="section" key={index}>
                <div className="bg" style={{ backgroundColor: itemData.colorTheme[index] }}></div>
                <div
                    className={'content' + (index > 0 ? ' elipsis-one-line' : '')}
                    style={{ backgroundColor: itemData.colorTheme[index] }}
                >
                    {children}
                </div>
            </div>
        );
    }

    return (
        <motion.div variants={variants} className="card record-list-item">
            <div className="image">
                <img src={itemData.cover} />
            </div>
            <div className="sections">{sections.map(getSection)}</div>
        </motion.div>
    );
}

export default RecordListItem;
