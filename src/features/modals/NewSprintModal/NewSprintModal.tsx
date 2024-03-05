'use client';

import { FC, JSX } from 'react';
import { DatePicker, Form, Input, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { INewSprintForm } from '@/shared/types';
import Title from 'antd/es/typography/Title';
import TextArea from 'antd/es/input/TextArea';


interface INewSprintModalProps {
  isOpened: boolean;
  onClose: () => void;
  onSubmit: (arg: INewSprintForm) => void;
}

const NewSprintModal: FC<INewSprintModalProps> = ({ isOpened, onSubmit, onClose }): JSX.Element => {

  const [form] = useForm<INewSprintForm>();
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onSubmit(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal centered
           open={isOpened}
           onOk={handleSubmit}
           onCancel={onClose}
           closeIcon={null}>
      <Title>
        New Sprint
      </Title>

      <Form>
        <Form.Item<INewSprintForm> label={'Sprint Name'}
                                   name={'title'}
                                   rules={[
                                     { required: true, message: 'title is required' },
                                     { max: 25, message: 'max length 25 chars' },
                                   ]}>
          <Input/>
        </Form.Item>
        <Form.Item<INewSprintForm> label={'Sprint description'}
                                   name={'description'}
                                   rules={[
                                     { required: true, message: 'Please write description' },
                                     { max: 150, message: 'max length 150 chars' },
                                   ]}>
          <TextArea />
        </Form.Item>
        <Form.Item<INewSprintForm> label={'Dates'} name={'date'} rules={[
          {required: true, message: 'Please enter date'},
        ]}>
          <DatePicker.RangePicker separator={'-'} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default NewSprintModal;
