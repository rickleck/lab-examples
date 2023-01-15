import '@/components/list/List.styles.scss';
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragStartEvent,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '@/data/Data.context';
import { ViewStateContext } from '@/states/view/View.context';
import { getTaskFromId, getTaskIdList } from '@/data/Data.utils';
import { useDataSaver } from '@/hooks/useDataSaver.hook';
import { useErrorDispatch } from '@/states/error/Error.context';
import { Task } from '@/data/Data.types';
import ListItem from '@/components/list/ListItem.component';

/**
 *
 */
function List(): JSX.Element {
    const errorDispatch = useErrorDispatch();
    const dataSaver = useDataSaver();
    const { currentTaskList, listNames } = useContext(DataContext);
    const [{ currentListName }, viewDispatch] = useContext(ViewStateContext);
    const [itemsOrder, setItemsOrder] = useState<string[]>([]);
    const [prevListName, setPrevListName] = useState<string>('');
    const draggingId = useRef<string | null>(null);
    const sensors = useSensors(useSensor(PointerSensor));

    useEffect(() => {
        // Only sync with data if list has changed in size or current listname has changed
        if (currentTaskList.length !== itemsOrder.length || prevListName !== currentListName) {
            setPrevListName(currentListName);
            setItemsOrder(getTaskIdList(currentTaskList));
        }
    }, [currentTaskList, currentListName, prevListName, itemsOrder]);

    /**
     *
     */
    function handleDragStart(e: DragStartEvent): void {
        // Notify item being dragged
        draggingId.current = e.active.id as string;
    }

    /**
     *
     */
    function handleDragEnd(e: DragEndEvent): void {
        const { active, over } = e;

        // Notify dragged item
        draggingId.current = null;

        if (active.id !== over?.id) {
            setItemsOrder((prev: string[]): string[] => {
                // Update list order
                const oldIndex = prev.indexOf(active.id as string);
                const newIndex = prev.indexOf(over?.id as string);
                const order = arrayMove(itemsOrder, oldIndex, newIndex);
                // Update items in db with new order values
                dataSaver.updateListOrder(order);
                // Save to state
                return order;
            });
        }
    }

    /**
     *
     */
    function handleRemoveTask(id: string): void {
        dataSaver.removeTask(id).catch((error: Error) => errorDispatch({ error: error }));
    }

    /**
     *
     */
    function handleCompleteToggle(itemData: Task): void {
        itemData.completed = !itemData.completed;
        dataSaver
            .updateTask(itemData.id, { completed: itemData.completed })
            .catch((error: Error) => errorDispatch({ error: error }));
    }

    /**
     *
     */
    function handleEditTask(itemData: Task): void {
        viewDispatch({ type: 'openEditor', editTask: itemData });
    }

    return (
        <>
            <div className="list">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    modifiers={[restrictToVerticalAxis]}
                    onDragEnd={handleDragEnd}
                    onDragStart={handleDragStart}
                >
                    <SortableContext items={itemsOrder} strategy={verticalListSortingStrategy}>
                        {itemsOrder.map((id: string, index: number): JSX.Element | undefined => {
                            const task = getTaskFromId(id, currentTaskList);
                            return (
                                task && (
                                    <ListItem
                                        itemData={task}
                                        key={task.id}
                                        draggingId={draggingId}
                                        index={index}
                                        onRemoveTask={handleRemoveTask}
                                        onCompleteToggle={handleCompleteToggle}
                                        onEditTask={handleEditTask}
                                    />
                                )
                            );
                        })}
                    </SortableContext>
                </DndContext>
            </div>
        </>
    );
}

export default List;
