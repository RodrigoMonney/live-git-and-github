const express = require('express')

const server = express()

server.get('/info', (req, res) => {
  return res.json({ info: 'status OK' })
})

server.listen(3000)