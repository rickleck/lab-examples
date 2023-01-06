import '@/components/list/List.styles.scss';
import { Task } from '@/data/Data.types';
import { useDataSave } from '@/data/hooks/useDataSave.hook';

function ListItem({ itemData }: { itemData: Task }): JSX.Element {
    const { removeTask, updateTask } = useDataSave();
    /**
     *
     */
    function remove(): void {
        removeTask(itemData.id);
    }

    /**
     *
     */
    function toggleCompleted(): void {
        updateTask(itemData.id, { completed: !itemData.completed });
    }

    return (
        <div className="list-item">
            <p>List: {itemData.list}</p>
            <p>Title: {itemData.title}</p>
            <p>Completed: {itemData.completed ? 'true' : 'false'}</p>
            <p>ID: {itemData.id}</p>
            <p>Order: {itemData.order}</p>
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
