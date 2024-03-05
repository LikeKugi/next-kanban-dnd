'use client';

import { JSX, useState } from 'react';
import { KanbanNewSprint } from '@/features/kanban';
import NewSprintModal from '@/features/modals/NewSprintModal/NewSprintModal';
import styles from './KanbanAddNewSprint.module.scss';
import { INewSprintForm } from '@/shared/types';

export const KanbanAddNewSprint = (): JSX.Element => {

  const [isOpened, setIsOpened] = useState(false);

  const closeModal = () => {
    setIsOpened(false);
  };

  const onSubmitModal = (values: INewSprintForm) => {
    console.log('VALUES ===> ', values);
  };

  return (
    <div className={styles.KanbanAddNewSprint}>
      <KanbanNewSprint onClick={() => setIsOpened(prevState => !prevState)}/>
      <NewSprintModal onClose={closeModal}
                      onSubmit={onSubmitModal}
                      isOpened={isOpened}/>
    </div>
  );
};
