import React, { useEffect, useState } from 'react';
import { blogDetail } from '../../core/api';
import { withRouter } from 'react-router';

const BlogDetail: React.FC = (props: any) => {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
  });

  const {
    history,
    location: { search },
  } = props;

  const id = search.slice(search.indexOf('id=') + 3);
  console.log('search id', search.indexOf('id='), id);

  useEffect(() => {
    async function fetchBlogDetail() {
      const { data: blog } = await blogDetail(id);
      console.log('blog Detail', blog);
      setBlog(blog);
    }
    fetchBlogDetail();
  }, []);

  const goHome = () => history.push('/');
  return (
    <>
      <a onClick={goHome}>返回</a>
      {blog.title ? (
        <div>
          <h2 className="blog-title">{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ) : (
        <div>还没有博客，快去创建一个吧！</div>
      )}
    </>
  );
};

export default withRouter(BlogDetail);
