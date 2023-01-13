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
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '@/data/Data.context';
import { useDataSaver } from '@/data/hooks/useDataSaver.hook';
import { ViewStateContext } from '@/states/view/View.context';
import { useDataUtils } from '@/data/hooks/useDataUtils.hook';
import ListItem from '@/components/list/ListItem.component';

/**
 *
 */
function List(): JSX.Element {
    const dataUtils = useDataUtils();
    const dataSaver = useDataSaver();
    const { currentTaskList } = useContext(DataContext);
    const [{ currentListName }] = useContext(ViewStateContext);
    const [itemsOrder, setItemsOrder] = useState<string[]>([]);
    const [prevListName, setPrevListName] = useState<string>('');
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const sensors = useSensors(useSensor(PointerSensor));

    useEffect(() => {
        // Re-draw only if curent list has changed in size or listname has changed
        if (currentTaskList.length !== itemsOrder.length || prevListName !== currentListName) {
            setPrevListName(currentListName);
            setItemsOrder(dataUtils.getTaskIdList(currentTaskList));
        }
    }, [currentTaskList, currentListName]);

    /**
     *
     */
    function handleDragEnd(e: DragEndEvent) {
        const { active, over } = e;

        // Notify list item
        setDraggingId(null);

        if (active.id !== over?.id) {
            setItemsOrder((prev: string[]) => {
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
    function handleDragStart(e: DragStartEvent) {
        // Notify list item
        setDraggingId(e.active.id as string);
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
                        {itemsOrder.map((id: string) => {
                            const task = dataUtils.getTaskFromId(id, currentTaskList);
                            return (
                                task && (
                                    <ListItem
                                        itemData={task}
                                        key={task.id}
                                        draggingId={draggingId}
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
