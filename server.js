const express = require('express')
const projectRoutes = require('./routes/projectRoutes')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('hello')
})

server.use('/projects', projectRoutes)

module.exports = server