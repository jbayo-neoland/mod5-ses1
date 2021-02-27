const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve('read.txt'), (err, data) => {
  if(err) {
    throw err;
  }
  console.log(`The content of the file is: ${data}`);
});

console.log('Reading a file');
