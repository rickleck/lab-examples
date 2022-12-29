import RecordListItem from './RecordListItem';
import type { Record } from './types';
import './styles.scss';

/**
 *
 */
function RecordList({ listData }: { listData: Record[] }): JSX.Element {
    const listItems = listData.map(
        (itemData: Record): JSX.Element => <RecordListItem {...itemData} key={itemData.id} />
    );

    return (
        <div className="container-responsive record-list">
            <div className="card header">Latest 10 records added.</div>
            {listItems}
        </div>
    );
}

export default RecordList;
