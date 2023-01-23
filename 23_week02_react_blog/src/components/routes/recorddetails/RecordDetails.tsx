import './RecordDetails.scss';
import { useLoaderData } from 'react-router-dom';
import { useLogMountStatus } from '@/utils/dev/useLogMountStatus';
import { RecordData } from '@/data/types/RecordData';
import HomeButton from '@/components/gui/common/HomeButton';

function RecordDetails(): JSX.Element {
    const itemData = useLoaderData() as RecordData;

    useLogMountStatus('blog post view');

    return (
        <>
            <HomeButton />
            <div className="record-details">
                <div>
                    <div className="image">
                        <img src={itemData.cover.front} />
                    </div>
                    {itemData.cover.extra && (
                        <div className="image">
                            <img src={itemData.cover.extra} />
                        </div>
                    )}
                </div>
                <div className="details">
                    <div className="headers">
                        <div className="header" style={{ backgroundColor: itemData.colorTheme[0] }}>
                            <h3 className="album">{itemData.album}</h3>
                            <p className="artist">{itemData.artist}</p>
                        </div>
                        <p className="header" style={{ backgroundColor: itemData.colorTheme[1] }}>
                            {itemData.year}
                        </p>
                        <p className="header" style={{ backgroundColor: itemData.colorTheme[2] }}>
                            {itemData.label}
                        </p>
                        <p className="header" style={{ backgroundColor: itemData.colorTheme[3] }}>
                            Added: {itemData.addedDate}
                        </p>
                    </div>

                    <div className="description">
                        <p>
                            <a href={itemData.discogsUrl} target="_blank">
                                Discogs
                            </a>
                        </p>
                        <p>{itemData.description.text}</p>
                        <p>
                            <a href={itemData.description.srcUrl} target="_blank">
                                Source
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecordDetails;
