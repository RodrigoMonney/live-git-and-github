const express = require('express')

const server = express()

<<<<<<< HEAD
server.get('/info', (req, res) => {
  return res.json({ info: 'status OK' })
=======
server.get('/information', (req, res) => {
  return res.json({ information: 'status 200 OK' })
>>>>>>> master
})

server.listen(3000)