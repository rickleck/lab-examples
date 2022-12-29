import RecordListItem from './RecordListItem';
import type { RecordVO } from './types';
import './styles.scss';

function RecordList({ listData }: { listData: RecordVO[] }): JSX.Element {
    const listItems = listData.map((recordData: RecordVO) => (
        <RecordListItem {...recordData} key={recordData.id} />
    ));

    return (
        <div className="record-list">
            <div className="card header">
                <h1>Latest 10 records added.</h1>
            </div>
            {listItems}
        </div>
    );
}

export default RecordList;
