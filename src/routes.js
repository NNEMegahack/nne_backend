const express = require('express')
const app = express.Router()

const UserController = require('./controllers/UserController')

app
    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)

module.exports = app