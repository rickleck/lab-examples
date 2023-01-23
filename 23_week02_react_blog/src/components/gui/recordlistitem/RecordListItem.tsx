import './RecordListItem.scss';
import { RecordData } from '@/data/types/RecordData';

/**
 *
 */
function RecordListItem(itemData: RecordData): JSX.Element {
    return (
        <div className="card record-list-item">
            <div className="image">
                <img src={itemData.cover.front} />
            </div>
            <div className="sections">
                <div className="section" style={{ backgroundColor: itemData.colorTheme[0] }}>
                    <p className="font-bold">{itemData.album}</p>
                    <p>{itemData.artist}</p>
                </div>
                <div className="section" style={{ backgroundColor: itemData.colorTheme[1] }}>
                    <p>{itemData.year}</p>
                </div>
                <div className="section" style={{ backgroundColor: itemData.colorTheme[2] }}>
                    <p>{itemData.label}</p>
                </div>
                <div className="section" style={{ backgroundColor: itemData.colorTheme[3] }}>
                    Added: {itemData.addedDate}
                </div>
            </div>
        </div>
    );
}

export default RecordListItem;
