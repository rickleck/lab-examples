import '@/components/list/List.scss';
import { Task } from '@/data/DataTypes';
import { RefObject, useEffect, useRef } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

/**
 *
 */
type ListItemProps = {
    itemData: Task;
    draggingId: RefObject<null | string>;
    index: number;
    onRemoveTask(id: string): void;
    onCompleteToggle(itemData: Task): void;
    onEditTask(itemData: Task): void;
};

/**
 *
 */
function ListItem({
    itemData,
    draggingId,
    index,
    onRemoveTask,
    onCompleteToggle,
    onEditTask,
}: ListItemProps): JSX.Element {
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: itemData.id,
    });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    setNodeRef(nodeRef.current);

    /**
     *
     */
    useEffect(() => {
        // Add style if this item is being dragged
        // Make sure to preserve any classes automatically added by dnd-kit
        if (nodeRef.current) {
            draggingId.current === itemData.id
                ? nodeRef.current.classList.add('is-dragging')
                : nodeRef.current.classList.remove('is-dragging');
        }
    }, [draggingId.current]);

    /**
     *
     */
    useEffect(() => {
        // Animate in
        // Using inline style props for dynamic delay
        if (nodeRef.current) {
            requestAnimationFrame(() => {
                nodeRef.current!.style.transition = 'opacity 250ms ease ' + 50 * index + 'ms';
                requestAnimationFrame(() => {
                    nodeRef.current!.style.opacity = '1';
                });
            });
        }
    }, [nodeRef.current]);

    /**
     *
     */
    function animateOut(): void {
        // Animate out
        // Replace previous transition and fade out
        if (nodeRef.current) {
            nodeRef.current.addEventListener('transitionend', handleTransitionEnd);
            requestAnimationFrame(() => {
                if (nodeRef.current) nodeRef.current.style.transition = 'opacity 250ms ease';
                requestAnimationFrame(() => {
                    if (nodeRef.current) nodeRef.current.style.opacity = '0';
                });
            });
        }
    }

    /**
     *
     */
    function handleTransitionEnd() {
        if (nodeRef.current)
            nodeRef.current.removeEventListener('transitionend', handleTransitionEnd);

        onRemoveTask(itemData.id);
    }

    return (
        <div className={'list-item'} style={style} ref={nodeRef} {...attributes}>
            <button
                onClick={() => {
                    onCompleteToggle(itemData);
                }}
                className="material-symbols-outlined btn-icon-primary btn-completed"
                title={itemData.completed ? 'Mark task not completed' : 'Mark task completed'}
            >
                {itemData.completed ? 'check_circle_outline' : 'radio_button_unchecked'}
            </button>
            <p className="title">{itemData.title}</p>
            <div className="buttons">
                <button
                    onClick={() => onEditTask(itemData)}
                    className="material-symbols-outlined btn-icon-primary btn-edit"
                    title="Edit task"
                >
                    edit
                </button>

                <button
                    onClick={animateOut}
                    className="material-symbols-outlined btn-icon-primary btn-delete"
                    title="Delete task"
                >
                    do_not_disturb_on
                </button>

                <button
                    {...listeners}
                    className={
                        'material-symbols-outlined btn-icon-primary btn-reorder' +
                        (draggingId.current === itemData.id ? ' is-dragging' : '')
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
