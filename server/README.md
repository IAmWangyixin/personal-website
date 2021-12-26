node 连接 mysql

报错：
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol request

卸载 mysql 安装包，npm i mysql2.

mysql 增删改查

```
// 进入数据库
use myblog;

// 显示表
-- show tables;

----
// 向表中插入数据(增)
insert into users (username, `password`, realname) values ('zhangsan', '123', '张三')

----
// 查询表中的所有数据（查）
select * from users;
select * from users where state <> '0';// state 不等于 0

//查询某些列数据
select id,username from users;

// 查询users中的所有数据，且只有满足where后的条件才显示出来。
select * from users where username='zhangsan' and `password`='123';

// 模糊查询: 查询username中有zhang的
select * from users where username like '%zhang%'

// 排序: desc 倒序
select * from users where username like '%zhang%' order by id desc;

---
// 更新表中的数据（改）
update users set realname='李四2' where username='lisi';

// 如果执行上述改语句报错，则执行
SET SQL_SAFE_UPDATES = 0;

---
// 删除 一定要加where
delete from users where username='lisi';
// 在正式的应用中，一般不会真删，而是做标记(软删)。在表中增加state列，如果state为1则表示有效，删除是将state更新为0。
```
