import { FC, JSX, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

const AppLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
  return (
    <Layout style={{display: 'flex', minHeight: '100vh'}}>
      <Header>
        Kanban Board
      </Header>
      <Content style={{flexGrow: 1}}>
        {children}
      </Content>
    </Layout>
  );
};
export default AppLayout;
