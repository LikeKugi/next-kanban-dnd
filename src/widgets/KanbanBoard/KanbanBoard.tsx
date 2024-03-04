'use client';

import { FC, JSX, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import { IKanbanBoard } from '@/shared/types';
import { reorder, reorderQuoteMap } from '@/shared/utils/reorder';
import { KanbanDNDId, KanbanDNDType } from '@/shared/constants';
import { Flex } from 'antd';
import KanbanColumn from '@/features/kanban/KanbanColumn/KanbanColumn';

interface IKanbanBoardProps {
  initial: IKanbanBoard;
}

const KanbanBoard: FC<IKanbanBoardProps> = ({ initial }): JSX.Element => {

  const [columns, setColumns] = useState(initial);
  const [ordered, setOrdered] = useState(Object.keys(initial));

  const onDragEnd = (result: DropResult) => {
    if (result.combine) {
      if (result.type === KanbanDNDType.COLUMN) {
        const shallow = [...ordered];
        shallow.splice(result.source.index, 1);
        setOrdered(shallow);
        return;
      }

      const column = columns[result.source.droppableId];
      const withQuoteRemoved = [...column];

      withQuoteRemoved.splice(result.source.index, 1);

      const orderedColumns = {
        ...columns,
        [result.source.droppableId]: withQuoteRemoved
      };
      setColumns(orderedColumns);
      return;
    }

    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const source = result.source;
    const destination = result.destination;

    // did not move anywhere - can bail early
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // reordering column
    if (result.type === KanbanDNDType.COLUMN) {
      const reorderedorder = reorder(ordered, source.index, destination.index);

      setOrdered(reorderedorder);

      return;
    }

    const data = reorderQuoteMap({
      quoteMap: columns,
      source,
      destination
    });

    setColumns(data.quoteMap);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={KanbanDNDId.BOARD}
                 direction="horizontal"
                 type={KanbanDNDType.COLUMN}
                 ignoreContainerClipping={false}
                 isCombineEnabled={false}>
        {provided => (
          <Flex gap={20} style={{flexGrow: 1}}
                            ref={provided.innerRef}>
          {ordered.map((key, idx) => (
            <div  key={key}  {...provided.droppableProps}>
              <KanbanColumn title={key} items={columns[key]} index={idx} />
            </div>
          ))}
          {provided.placeholder}
        </Flex>)}
      </Droppable>
      Board
    </DragDropContext>
  );
};
export default KanbanBoard;
