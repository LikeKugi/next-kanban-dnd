'use client'

import { FC, JSX } from 'react';
import { IItems } from '@/shared/types';
import { Draggable } from '@hello-pangea/dnd';
import ColumnContainer from '@/shared/ui/ColumnContainer/ColumnContainer';
import KanbanHeader from '@/features/kanban/KanbanHeader/KanbanHeader';
import Title from 'antd/es/typography/Title';
import ItemsList from '@/entities/ItemsList/ItemsList';
import { KanbanDNDType } from '@/shared/constants';

interface IKanbanColumnProps {
  title: string;
  items: IItems;
  index: number;
}

const KanbanColumn: FC<IKanbanColumnProps> = ({title, index, items}): JSX.Element => {
  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <ColumnContainer ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
          <KanbanHeader isDragging={snapshot.isDragging}>
            <Title level={3}>{title}</Title>
          </KanbanHeader>
          <ItemsList items={items} listId={title} listType={KanbanDNDType.ITEMS} />
        </ColumnContainer>
      )}
    </Draggable>
  );
};
export default KanbanColumn;
