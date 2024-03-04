import { DetailedHTMLProps, FC, ForwardedRef, forwardRef, HTMLAttributes, JSX } from 'react';
import Title from 'antd/es/typography/Title';
import { clsx } from 'clsx';
import styles from './KanbanHeader.module.scss'

interface IKanbanHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isDragging: boolean;
}

const KanbanHeader = forwardRef(function Container({
                                                     children,
                                                     className,
                                                     title,
                                                     isDragging,
                                                     ...other
                                                   }: IKanbanHeaderProps,
                                                   ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div ref={ref} className={clsx(styles.KanbanHeader, isDragging && styles['KanbanHeader--dragging'])}>
      {children}
    </div>
  );
});
export default KanbanHeader;
