import { FC, JSX } from 'react';
import { IItem } from '@/shared/types';
import { Draggable, Droppable } from '@hello-pangea/dnd';

interface IItemsListProps {
  items: IItem[];
  listId: string;
  listType: string
}

const ItemsList: FC<IItemsListProps> = ({items, listId, listType}): JSX.Element => {
  return (
    <Droppable droppableId={listId} type={listType}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef}>
          {items.map((item, idx )=> (
            <Draggable key={item.id} draggableId={item.id} index={idx}>
              {(dragProvided, dragSnapshot) => (
                <p key={item.id} ref={dragProvided.innerRef}
                   {...dragProvided.draggableProps}
                   {...dragProvided.dragHandleProps}>{item.content}</p>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default ItemsList;
