import type { Record } from '@/components/recordlist/types';
import '@/components/recordlist/styles.scss';
import { CSSProperties, useState } from 'react';

/**
 *
 */
function RecordListItem(record: Record): JSX.Element {
    const [themed, setThemed] = useState<boolean>(true);

    /**
     *
     */
    function toggleTheme(): void {
        setThemed((themed) => !themed);
    }

    /**
     *
     */
    function bgColor(color: string): CSSProperties {
        return { backgroundColor: themed ? color : 'black' };
    }

    return (
        <div className="card record-list-item" onClick={toggleTheme}>
            <div className={'image' + (!themed ? ' bw-filter' : '')}>
                <img src={record.coverUrl} />
            </div>
            <div className="sections">
                <div className="section" style={bgColor(record.theme.color1)}>
                    <p className="title">{record.title}</p>
                    <p>{record.artist}</p>
                </div>
                <div className="section" style={bgColor(record.theme.color2)}>
                    <p>{record.orgReleaseYear}</p>
                    <p>{record.label}</p>
                </div>
                <div className="section" style={bgColor(record.theme.color3)}>
                    Added: {record.addedDate}
                </div>
                <div className="section" style={bgColor(record.theme.color4)}>
                    <a className="link" href={record.discogsUrl} target="_blank">
                        Discogs
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RecordListItem;
