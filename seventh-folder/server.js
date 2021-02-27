const http = require('http')
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT || 3000;

const fileName = path.resolve('./seventh-folder/chiquito.txt');
console.log(fileName);

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(`Hello`)
  } else {
    fs.readFile(fileName, (err, data) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(`<pre>${data}</pre>`)
    })
  }
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
