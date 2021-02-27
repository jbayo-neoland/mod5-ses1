const fs = require('fs');
const path = require('path');

fs.stat(path.resolve('read.txt'), 'r', (err, stats)=> {
  if (err) {
    console.error(err)
    return
  }
  //we have access to the file stats in `stats`
  console.log(stats);
})
