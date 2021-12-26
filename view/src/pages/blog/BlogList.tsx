import React, { useEffect, useState } from 'react';
import { blogList } from '../../core/api';

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState([]);
  console.log('blog');

  useEffect(() => {
    async function fetchBlogList() {
      const { data: blogLists } = await blogList();
      console.log('lists', blogLists);
      setBlogs(blogLists);
    }
    fetchBlogList();
  }, []);
  return (
    <>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id}>
            <h2 className="blog-title">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <div>还没有博客，快去创建一个吧！</div>
      )}
    </>
  );
};

export default BlogList;
