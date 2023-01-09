import '@/components/list/List.styles.scss';
import { Task } from '@/data/Data.types';
import { useDataSaver } from '@/data/hooks/useDataSaver.hook';
import { useErrorDispatch } from '@/components/main/states/error/Error.context';
import { ViewStateContext } from '@/components/main/states/view/View.context';
import { useContext } from 'react';

/**
 *
 */
type ListItemProps = {
    itemData: Task;
};

/**
 *
 */
function ListItem({ itemData }: ListItemProps): JSX.Element {
    const { removeTask, updateTask } = useDataSaver();
    const errorDispatch = useErrorDispatch();
    const [{}, viewDispatch] = useContext(ViewStateContext);

    return (
        <div className="list-item">
            <p>List: {itemData.list}</p>
            <p>Title: {itemData.title}</p>
            <p>Completed: {itemData.completed ? 'true' : 'false'}</p>
            <p>ID: {itemData.id}</p>
            <p>Order: {itemData.order}</p>
            <button
                onClick={() => viewDispatch({ type: 'openEditor', editTask: itemData })}
                className="btn-primary"
            >
                Edit
            </button>
            <button
                onClick={() => {
                    updateTask(itemData.id, { completed: !itemData.completed }).catch(
                        (error: Error) => errorDispatch({ error: error })
                    );
                }}
                className="btn-primary"
            >
                Toggle
            </button>
            <button
                onClick={() => {
                    removeTask(itemData.id).catch((error: Error) =>
                        errorDispatch({ error: error })
                    );
                }}
                className="btn-primary"
            >
                Delete
            </button>
        </div>
    );
}

export default ListItem;
