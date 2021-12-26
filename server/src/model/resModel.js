class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = 0;
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = -1;
  }
}

function baseModel(data, message) {
  let obj = {};
  if (typeof data === 'string') {
    obj.message = data;
    return obj;
  }
  if (data) {
    obj.data = data;
  }
  if (message) {
    obj.message = message;
  }
  return obj;
}

function successModel(data, message) {
  let obj = baseModel(data, message);
  obj.errno = 0;
  return obj;
}

function errorModel(data, message) {
  let obj = baseModel(data, message);
  obj.errno = -1;
  return obj;
}

module.exports = {
  errorModel,
  successModel,
};
