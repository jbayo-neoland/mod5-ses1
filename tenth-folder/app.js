const express = require('express')
const app = express()
const path = require('path')

// DONE - Serving static files
app.use(express.static(path.join(__dirname, 'dist/games')));

// TODO - What if the route is /platforms???

app.listen(5500)
