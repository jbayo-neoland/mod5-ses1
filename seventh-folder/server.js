const http = require('http')
require('dotenv').config();

const port = process.env.PORT || 32200;

const server = http.createServer((req, res) => {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
