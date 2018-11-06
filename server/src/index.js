const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001

const server = require('http').Server(app)
const io = require('socket.io')(server)

// require('dotenv').load()
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
})

app.use((req, res, next) => {
  req.io = io

  return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

server.listen(port, () => {
  console.log(`Server started on port http://localhost:${port}`)
})