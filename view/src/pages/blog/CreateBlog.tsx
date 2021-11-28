import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CreateBlog: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <h1>create blog</h1>
      <Form {...layout} name="blog" onFinish={onFinish}>
        <Form.Item name="blogTitle" label="标题" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="blogContent" label="内容">
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
