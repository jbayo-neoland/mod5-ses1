const express = require('express')
const app = express()
const path = require('path');


app.use('/assets', express.static(path.join(__dirname, 'my-folder')));



app.get('/', function (req, res) {
  console.log(`query ${JSON.stringify(req.query, null, 2)}`);
  console.log(`headers ${JSON.stringify(req.headers, null, 2)}`);
  res.json({hey: 'ho'})
})

app.get('/a.txt', function (req, res) {
  res.send('Are you asking for a file?')
})

app.get('/hello', function (req, res) {
  res.send('You said hello')
})

app.post('/hello', function (req, res) {
  console.log(`body payload ${JSON.stringify(req.body, null, 2)}`);
  res.send('You post hello')
})

app.put('/hello', function (req, res) {
  res.send('You put hello')
})

app.delete('/hello', function (req, res) {
  res.send('You deleted hello')
})

app.listen(3000)
