const express = require('express')
const projectRoutes = require('./routes/projectRoutes')
const actionRoutes = require('./routes/actionRoutes')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('hello')
})

server.use('/projects', projectRoutes)
server.use('/actions', actionRoutes)

module.exports = server