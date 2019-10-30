const express = require('express')

const server = express()

server.get('/message', (req, res) => {
  return res.json({ message: 'Hello, world' })
})

server.listen(3000)