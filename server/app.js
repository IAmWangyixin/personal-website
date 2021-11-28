// 系统基本设置聚集：返回类型、path\query\未命中404
const { log } = require('console');
const queryString = require('querystring');
// 业务代码

const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

// 获取Cookie的过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  // console.log('d.toGMTString() is', d.toGMTString());

  return d.toGMTString();
};

// session 数据
const SESSION_DATA = {};

const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({});
      return;
    }

    if (req.headers['content-type'].indexOf('application/json') < 0) {
      resolve({});
      return;
    }
    var postData = '';
    req.on('data', (chunk) => {
      postData += chunk.toString();
    });
    req.on('end', () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.parse(postData));
    });
  });
  return promise;
};

const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json');

  // 处理path
  const url = req.url;
  const path = url.split('?')[0];
  req.path = path;

  // 解析query
  req.query = queryString.parse(url.split('?')[1]);

  // 解析cookie
  req.cookie = {};
  const cookieStr = req.headers.cookie || ''; // k1=v1;k2=v2;
  cookieStr.split(';').forEach((item) => {
    if (!item) {
      return;
    }

    const arr = item.split('=');
    const key = arr[0].trim();
    const val = arr[1];
    req.cookie[key] = val;
  });

  // 解析 session
  let needSetCookie = false;
  let userId = req.cookie.userid;
  if (userId) {
    if (!SESSION_DATA[userId]) {
      SESSION_DATA[userId] = {};
    }
  } else {
    needSetCookie = true;
    userId = `${Date.now()}_${Math.random()}`;
    SESSION_DATA[userId] = {};
  }
  req.session = SESSION_DATA[userId];

  //处理postData
  getPostData(req).then((postData) => {
    req.body = postData;

    // 处理博客路由
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then((blogData) => {
        // 设置cookie
        if (needSetCookie) {
          res.setHeader(
            'Set-Cookie',
            `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
          );
        }
        res.end(JSON.stringify(blogData));
      });
      return;
    }

    const userResult = handleUserRouter(req, res);
    if (userResult) {
      userResult.then((userData) => {
        // 设置cookie
        if (needSetCookie) {
          res.setHeader(
            'Set-Cookie',
            `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`
          );
        }
        res.end(JSON.stringify(userData));
      });
      return;
    }
    // 未命中路由，返回404
    res.writeHead(404, {
      'content-type': 'text/plain',
    });
    res.write('404 not found');
    res.end();
  });
};

module.exports = serverHandle;
