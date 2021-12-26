import React, { useCallback } from 'react';
import { Button, Layout } from 'antd';
import { withRouter } from 'react-router';
import './layout.scss';

const { Header } = Layout;

const IndexLayoutHeader: React.FC = (props: any) => {
  const { history } = props;

  const handleLogin = useCallback(() => {
    history.push('/login');
  }, []);

  return (
    <Header className="index-layout-header">
      <div className="header-logo-wrapper">
        <div className="header-logo" />
        <p className="header-title">展示屋</p>
      </div>
      <div className="login-btn-wrapper">
        <Button type="primary" onClick={handleLogin}>
          登录
        </Button>
      </div>
    </Header>
  );
};

export default withRouter(IndexLayoutHeader);
