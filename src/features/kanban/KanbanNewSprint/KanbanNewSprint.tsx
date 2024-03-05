'use client'

import { ForwardedRef, forwardRef } from 'react';
import { Button, ButtonProps } from 'antd';

const KanbanNewSprint = forwardRef(function button(props: Omit<ButtonProps, 'children'>, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <div>
      <Button {...props} ref={ref} type="primary">
        New Sprint
      </Button>
    </div>
  );
});
export default KanbanNewSprint;
