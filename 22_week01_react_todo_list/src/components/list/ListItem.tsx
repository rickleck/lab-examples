import { Task } from '@/services/DataService.types';
import { useDataService } from '@/services/useDataService';
import '@/components/list/List.styles.scss';

function ListItem(itemData: Task) {
    const dataService = useDataService();

    /**
     *
     */
    function remove(): void {
        dataService.removeTask(itemData.id);
    }

    /**
     *
     */
    function toggleCompleted(): void {
        dataService.updateTask(itemData.id, { completed: !itemData.completed });
    }

    return (
        <div className="list-item">
            <p>List: {itemData.list}</p>
            <p>Title: {itemData.title}</p>
            <p>Completed: {itemData.completed ? 'true' : 'false'}</p>
            <p>ID: {itemData.id}</p>
            <button onClick={toggleCompleted} className="btn-primary">
                Toggle
            </button>
            <button onClick={remove} className="btn-primary">
                Delete
            </button>
        </div>
    );
}

export default ListItem;
