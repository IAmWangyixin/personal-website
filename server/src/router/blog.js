// 只管路由，具体数据及处理不管
const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require('../controller/blog');
const { login } = require('../controller/user');
const { successModel, errorModel } = require('../model/resModel');

// 统一的登录验证函数
const loginCheck = (req) => {
  if (!req.session.username) {
    return Promise.resolve(errorModel('未登录'));
  }
};

const handleBlogRouter = (req, res) => {
  const method = req.method; // GET POST
  const id = req.query.id;

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || '';
    const keyword = req.query.keyword || '';
    const result = getList(author, keyword);
    return result.then((listData) => {
      return successModel(listData);
    });
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id);
    return result.then((data) => {
      return successModel(data);
    });
  }

  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      //未登录
      return loginCheckResult;
    }

    req.body.author = req.session.username;
    const result = newBlog(req.body);
    return result.then((data) => {
      return successModel(data);
    });
  }

  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      //未登录
      return loginCheckResult;
    }

    const result = updateBlog(id, req.body);
    return result.then((val) => {
      if (val) {
        return successModel();
      } else {
        return errorModel('博客更新失败');
      }
    });
  }

  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const loginCheckResult = loginCheck(req);
    if (loginCheckResult) {
      //未登录
      return loginCheckResult;
    }
    const author = req.session.username;
    const result = delBlog(id, author);
    return result.then((val) => {
      if (val) {
        return successModel();
      } else {
        return errorModel('博客删除失败');
      }
    });
  }
};

module.exports = handleBlogRouter;
