const mysql = require('mysql2')
const { MYSQL_CONF } = require('../conf/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 执行sql语句

// const sql = `insert into blogs (title, content, createtime, author) values ('标题c', '内容c', 1618113962179, 'lisi');`
// const sql = 'select * from users;'
// 统一执行的sql函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        console.error(err)
        reject(err)
        return
      }
      // console.log(result)
      resolve(result)
    })
  })
  return promise;
}

module.exports = {
  exec
}