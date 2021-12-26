const { login, getUserInfo } = require('../controller/user');
const { successModel, errorModel } = require('../model/resModel');
const handleUserRouter = (req, res) => {
  const method = req.method; // GET POST

  // 这是登录的接口
  if (method === 'POST' && req.path === '/api/user/login') {
    // const { username, password } = req.query;
    console.log('node req', req.body);

    const { username, password } = req.body;
    const result = login(username, password);
    return result.then((data) => {
      if (data && data.username) {
        // 设置session
        req.session.username = data.username;
        req.session.realname = data.realname;

        return successModel({
          id: data.id,
        });
      }
      return errorModel('登录失败');
    });
  }

  if (method === 'GET' && req.path === '/api/user/info') {
    const { id } = req.query;

    const result = getUserInfo(id);
    return result.then((data) => {
      if (data) {
        return successModel({
          username: data.username,
          realname: data.realname,
          id: data.id,
        });
      }
      return errorModel('获取用户信息失败');
    });
  }
};

module.exports = handleUserRouter;
