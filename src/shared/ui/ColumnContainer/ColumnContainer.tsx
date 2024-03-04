import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import styles from './ColumnContainer.module.scss'

const ColumnContainer = forwardRef(function Container({
                                                        children,
                                                        className,
                                                        ...other
                                                      }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
                                                      ref: ForwardedRef<HTMLDivElement>) {
  return (
    <div className={clsx(className, styles.ColumnContainer)} {...other}
         ref={ref}>
      {children}
    </div>
  );
});
export default ColumnContainer;
