const express = require('express')
const app = express.Router()

const UserController = require('./controllers/UserController')

app
    .get('/products', UserController.index)
    .post('/products', UserController.create)
    .put('/products/:id', UserController.update)
    .delete('/products/:id', UserController.delete)
    .get('/barcode/:code', UserController.barcode)

module.exports = app