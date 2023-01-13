import '@/components/list/List.styles.scss';
import { Task } from '@/data/Data.types';
import { useDataSaver } from '@/data/hooks/useDataSaver.hook';
import { useErrorDispatch } from '@/states/error/Error.context';
import { ViewStateContext } from '@/states/view/View.context';
import { useContext } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/**
 *
 */
type ListItemProps = {
    itemData: Task;
    draggingId: string | null;
};

/**
 *
 */
function ListItem({ itemData, draggingId }: ListItemProps): JSX.Element {
    const { removeTask, updateTask } = useDataSaver();
    const errorDispatch = useErrorDispatch();
    const [{}, viewDispatch] = useContext(ViewStateContext);
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: itemData.id,
    });

    const style = {
        // Update dragging
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            className={'list-item' + (draggingId === itemData.id ? ' is-dragging' : '')}
            style={style}
            ref={setNodeRef}
            {...attributes}
        >
            <button
                onClick={() => {
                    updateTask(itemData.id, { completed: !itemData.completed }).catch(
                        (error: Error) => errorDispatch({ error: error })
                    );
                }}
                className="material-symbols-outlined btn-icon-primary btn-completed"
                title={itemData.completed ? 'Mark task not completed' : 'Mark task completed'}
            >
                {itemData.completed ? 'check_circle_outline' : 'radio_button_unchecked'}
            </button>
            <p className="title">{itemData.title}</p>
            <div className="buttons">
                <button
                    onClick={() => viewDispatch({ type: 'openEditor', editTask: itemData })}
                    className="material-symbols-outlined btn-icon-primary btn-edit"
                    title="Edit task"
                >
                    edit
                </button>

                <button
                    onClick={() => {
                        removeTask(itemData.id).catch((error: Error) =>
                            errorDispatch({ error: error })
                        );
                    }}
                    className="material-symbols-outlined btn-icon-primary btn-delete"
                    title="Delete task"
                >
                    do_not_disturb_on
                </button>

                <button
                    {...listeners}
                    className={
                        'material-symbols-outlined  btn-icon-primary btn-reorder' +
                        (draggingId === itemData.id ? ' is-dragging' : '')
                    }
                    title="Reorder list"
                >
                    reorder
                </button>
            </div>
        </div>
    );
}

export default ListItem;
