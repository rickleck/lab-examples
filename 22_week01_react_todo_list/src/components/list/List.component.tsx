import '@/components/list/List.styles.scss';
import { useContext } from 'react';
import { DataContext } from '@/data/Data.context';
import { ViewStateContext } from '@/components/main/states/view/View.context';
import ListItem from '@/components/list/ListItem.component';

/**
 *
 */
function List(): JSX.Element {
    const { tasksByListName } = useContext(DataContext);
    const [{ currentList }] = useContext(ViewStateContext);

    return (
        <div className="list">
            {(tasksByListName.get(currentList) || []).map((itemData) => (
                <ListItem itemData={itemData} key={itemData.id} />
            ))}
        </div>
    );
}

export default List;
