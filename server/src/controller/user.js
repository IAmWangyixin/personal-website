const { exec } = require('../db/mysql');

const login = (username, password) => {
  // 使用假数据
  const sql = `select username, realname, id from users where username='${username}' and password='${password}';`;
  return exec(sql).then((rows) => {
    console.log('users', rows);
    return rows[0];
  });
};
const getUserInfo = (id) => {
  const sql = `select * from users where id='${id}'`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

module.exports = {
  login,
  getUserInfo,
};
