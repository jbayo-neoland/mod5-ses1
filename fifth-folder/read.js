const fs = require('fs');
const path = require('path');

const fileName = path.resolve('read.txt');
// get information about the file
fs.exists(fileName, function(exists) {
  if (exists) {

    // get information about the file
    fs.stat(fileName, function(error, stats) {

      // open the file (getting a file descriptor to it)
      fs.open(fileName, "r", function(error, fd) {
        let buffer = Buffer.alloc(stats.size);

        // read its contents into buffer
        fs.read(fd, buffer, 0, buffer.length/2, null, readCallback);
      });
    });
  }
});

const errorHandler = (err, data) => {
  if (err) {
    throw err;
  }
}

function readCallback(error, bytesRead, buffer) {

  let data = buffer.toString("utf8", 0, buffer.length);

  console.log(`And the content is \n${data}`);
  fs.close(fd, errorHandler);
}

console.log('Reading a file');
