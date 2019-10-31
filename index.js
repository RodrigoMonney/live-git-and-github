const express = require('express')

const server = express()

server.get('/information', (req, res) => {
  return res.json({ information: 'status 200 OK' })
})

server.listen(3000)