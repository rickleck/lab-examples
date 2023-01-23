import './RecordList.scss';
import { useLoaderData } from 'react-router-dom';
import { useLogMountStatus } from '@/utils/dev/useLogMountStatus';
import { RecordData } from '@/data/types/RecordData';
import { Link } from 'react-router-dom';
import { appRoutes } from '@/router/appRoutes';
import RecordListItem from '@/components/gui/recordlistitem/RecordListItem';

function RecordList(): JSX.Element {
    const items = useLoaderData() as RecordData[];

    useLogMountStatus('start view');

    const listItems = items.map(
        (itemData: RecordData): JSX.Element => (
            <Link to={appRoutes.RECORD_DETAILS + itemData.id} key={itemData.id}>
                <RecordListItem {...itemData} />
            </Link>
        )
    );

    return (
        <div className="container-responsive record-list">
            <p className="font-bold">Latest {items.length} records added.</p>
            <div className="record-list-items">{listItems}</div>
        </div>
    );
}

export default RecordList;
