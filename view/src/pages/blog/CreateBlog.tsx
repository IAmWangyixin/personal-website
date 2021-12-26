import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { createBlog } from '../../core/api';

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 16 },
};

const CreateBlog: React.FC = () => {
  const onFinish = async (values: any) => {
    const res = await createBlog(values);
    if (res.errno === -1) {
      message.error(res.message);
    }
    console.log(values);
  };

  return (
    <div>
      <h1>create blog</h1>
      <Form {...layout} name="blog" onFinish={onFinish}>
        <Form.Item name="title" label="标题" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="content" label="内容">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateBlog;
