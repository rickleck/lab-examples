import '@/components/list/List.styles.scss';
import { useContext } from 'react';
import ListItem from '@/components/list/ListItem.component';
import { DataContext } from '@/data/Data.context';
import { DataSubscription } from '@/data/Data.types';

function List(): JSX.Element {
    const { tasks } = useContext<DataSubscription>(DataContext);

    return (
        <div className="list">
            {tasks.map((itemData) => (
                <ListItem itemData={itemData} key={itemData.id} />
            ))}
        </div>
    );
}

export default List;
