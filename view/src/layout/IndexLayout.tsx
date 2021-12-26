import React from 'react';
import { Layout } from 'antd';
import Nav from './Nav';
import IndexLayoutHeader from './IndexLayoutHeader';
import './layout.scss';

const { Content } = Layout;

const IndexLayout: React.FC = ({ children }) => {
  // const { children, history } = props;

  return (
    <Layout className="index-layout">
      <IndexLayoutHeader />
      <Layout>
        <Nav />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default IndexLayout;
