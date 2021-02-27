const fs = require('fs');
const path = require('path');

fs.open(path.resolve('read.txt'), 'r', (err, fd)=> {
  if(err) {
    throw err;
  }
  console.log(`File descriptor is: ${fd}`);
});

console.log('Reading a file');
