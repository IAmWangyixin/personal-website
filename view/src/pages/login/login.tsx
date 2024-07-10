import React, { useContext } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { requests } from '../../utils';
import { useHistory } from 'react-router';
import { UserContext } from '../../context/userContext';

const Login: React.FC = (props: any) => {
  const history = useHistory();
  const userInfo = useContext(UserContext);
  const onFinish = async (values: any) => {
    const res = await requests.post('/api/user/login', values);
    if (res.errno === 0) {
      sessionStorage.setItem('userId', res.data.id);
      userInfo.id = res.data.id;
      history.push('/');
    } else {
      message.error('登录失败');
    }
  };

  return (
    <div className="login">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
