const fs = require('fs');
const path = require('path');
const {customEventEmitter} = require('../sixth-folder/events');

fs.readFile(path.resolve('read.txt'), (err, data) => {
  if(err) {
    throw err;
  }
  console.log(`The content of the file is: ${data}`);
  customEventEmitter.emit('done', 'Jordi');
});

console.log('Reading a file');
