import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Layout, message } from 'antd';
// import { withRouter } from 'react-router';
import './layout.scss';
import { UserContext } from '../context/userContext';

const { Header } = Layout;

const IndexLayoutHeader: React.FC = (props: any) => {
  // const { history } = props;
  const user = useContext(UserContext);

  const [userInfo, setUserInfo] = useState({
    username: '',
    realname: '',
  });

  useEffect(() => {
    console.log('IndexLayoutHeader useEffect', user);
    setUserInfo(user);
  }, [user]);

  // console.log('userInfo');

  // const handleLogin = useCallback(() => {
  //   history.push('/login');
  // }, []);

  return (
    <Header className="index-layout-header">
      <div className="header-logo-wrapper">
        <div className="header-logo" />
        <p className="header-title">欢迎来到王义欣的小馆</p>
      </div>
      <div className="login-btn-wrapper">
        {/* {userInfo.username ? (
          <span className="user-name">{userInfo.realname}</span>
        ) : (
          <Button type="primary" onClick={handleLogin}>
            登录
          </Button>
        )} */}
      </div>
    </Header>
  );
};

export default IndexLayoutHeader;
