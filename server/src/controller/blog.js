const { exec } = require('../db/mysql');

// 只关心数据
const getList = (author, keyword) => {
  // author与keyword不确定，所以加1=1占位补充条件，保证语法正确。
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createtime desc;`;

  // 返回promises
  return exec(sql);
};

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象，包含title content 属性
  const title = blogData.title;
  const content = blogData.content;
  const createTime = Date.now();
  const author = blogData.author;

  const sql = `
    insert into blogs (title, content, createTime, author)
    values ('${title}', '${content}', ${createTime}, '${author}');
  `;
  return exec(sql).then((insertData) => {
    console.log('insertId', insertData);
    return {
      id: insertData.insertId,
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  // id为要更新博客的id
  // blogData是一个博客对象，包含title content属性
  console.log('update', id, blogData);
  const title = blogData.title;
  const content = blogData.content;

  const sql = `update blogs set title='${title}', content='${content}' where id=${id}`;
  return exec(sql).then((updateData) => {
    // console.log('updateData', updateData)
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

const delBlog = (id, author) => {
  const sql = `delete from blogs where id='${id}' and author='${author}'`;

  return exec(sql).then((delData) => {
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};
