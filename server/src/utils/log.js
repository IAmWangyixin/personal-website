const fs = require('fs');
const path = require('path');

function writeLog(writeStream, log) {
  writeStream.write(log + '\n');
}

function createWriteStream(filename) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', filename);
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a',
  });
  return writeStream;
}

const accessWriteStream = createWriteStream('access.log');

function access(log) {
  writeLog(accessWriteStream, log);
}

module.exports = {
  access,
};
