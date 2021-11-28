import React from 'react';
import { Layout } from 'antd';
import Nav from './Nav';
import './layout.scss';

const { Header, Content } = Layout;

const IndexLayout: React.FC = ({ children }) => {
  // const { children } = props;
  return (
    <Layout className="index-layout">
      <Header className="header">
        <div className="header-logo" />
        <p className="header-title">展示屋</p>
      </Header>
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
