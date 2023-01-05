import { useDataService } from '@/services/useDataService';
import Editor from '@/components/editor/Editor';
import ListItem from '@/components/list/ListItem';
import '@/components/list/List.styles.scss';

function List() {
    const { tasks } = useDataService();

    return (
        <div className="list">
            {tasks.map((itemData) => (
                <ListItem {...itemData} key={itemData.id} />
            ))}
            <Editor />
        </div>
    );
}

export default List;
