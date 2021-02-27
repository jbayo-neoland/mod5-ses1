const fs = require('fs');
const path = require('path');

(async () => {
  let content = await fs.readFileSync(path.resolve('read.txt'));
  console.log(`The content of the file is: ${content}`);
})()

console.log('Reading a file');
