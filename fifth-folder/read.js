const fs = require('fs');
const path = require('path');

const fileName = path.resolve('read.txt');
// get information about the file
fs.exists(fileName, existsCallback);





function existsCallback(exists) {
  if (exists) {
    // get information about the file
    fs.stat(fileName, statCallback);
  }
}

function statCallback(error, stats) {
  // open the file (getting a file descriptor to it)
  fs.open(fileName, "r", openCallbackWrapper(stats));
}

function openCallbackWrapper(stats){
  return function openCallback(error, fd) {
    let buffer = Buffer.alloc(stats.size);
    // read its contents into buffer
    fs.read(fd, buffer, 0, buffer.length/2, null, readCallbackWrapper(fd));
  }
}

function readCallbackWrapper(fd) {
  return function readCallback(error, bytesRead, buffer) {
    let data = buffer.toString("utf8", 0, buffer.length);

    console.log(`And the content is \n${data}`);
    fs.close(fd, closeCallback);
  }
}

const closeCallback = (err, data) => {
  if (err) {
    throw err;
  }
}
console.log('Reading a file');
