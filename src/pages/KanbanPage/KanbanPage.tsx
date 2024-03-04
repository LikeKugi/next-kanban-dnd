import { JSX } from 'react';
import Title from 'antd/es/typography/Title';
import KanbanBoard from '@/widgets/KanbanBoard/KanbanBoard';
import { generateQuoteMap } from '@/shared/utils/mockData';

import styles from './KanbanPage.module.scss';

const initial = generateQuoteMap(50)

const KanbanPage = (): JSX.Element => {
  return (
    <div className={styles.KanbanPage}>
      <Title level={1}>Simple Kanban Board Example</Title>
      <KanbanBoard initial={initial} />
    </div>
  );
};
export default KanbanPage;
