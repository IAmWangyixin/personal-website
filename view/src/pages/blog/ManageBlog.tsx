import React, { useEffect, useState } from 'react';
import { Table, Tag, Space } from 'antd';
import moment from 'moment';
import { blogList } from '../../core/api';
import { useHistory } from 'react-router';
const columns = ({ gotoBlogDetail }) => [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    render: (text, row) => <a onClick={() => gotoBlogDetail(row.id)}>{text}</a>,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
    render: (time) => moment(time).format('YYYY-MM-DD'),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const ManageBlog: React.FC = (props: any) => {
  const [blogLists, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogList() {
      const { data: blogLists } = await blogList();
      setBlogs(blogLists);
    }
    fetchBlogList();
  }, []);

  const history = useHistory();
  const gotoBlogDetail = (id: string | number) => {
    console.log(id);

    history.push(`/blog/detail?id=${String(id)}`);
  };
  return (
    <Table
      columns={columns({
        gotoBlogDetail,
      })}
      dataSource={blogLists}
      rowKey={(record) => record.id}
    />
  );
};

export default ManageBlog;
