const { login } = require('../controller/user');
const { successModel, errorModel } = require('../model/resModel');
const handleUserRouter = (req, res) => {
  const method = req.method; // GET POST

  // 这是登录的接口
  if (method === 'POST' && req.path === '/api/user/login') {
    // const { username, password } = req.query;
    const { username, password } = req.body;
    const result = login(username, password);
    return result.then((data) => {
      if (data && data.username) {
        // 设置session
        req.session.username = data.username;
        req.session.realname = data.realname;

        return successModel();
      }
      return errorModel('登录失败');
    });
  }
};

module.exports = handleUserRouter;
