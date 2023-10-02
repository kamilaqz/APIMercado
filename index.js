'use strict'

const express = require('express')
const app = express()
const jwtService = require('jsonwebtoken');
const dotenv = require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin@supermercado-cluster.7x01bc3.mongodb.net/?retryWrites=true&w=majority')

const port = process.env.port || 3000

const productRouter = require('./src/routers/productRouter')
const clientRouter = require('./src/routers/clientRouter')
const purchaseRouter = require('./src/routers/purchaseRouter')
const promotionRouter = require('./src/routers/promotionRouter')
const employeeRouter = require('./src/routers/employeeRouter');
const middlewareAuth = require('./src/routers/middlewareAuth');

app.use(express.json())
app.use(middlewareAuth)
app.use(productRouter)
app.use(clientRouter)
app.use(purchaseRouter)
app.use(promotionRouter)
app.use(employeeRouter)


app.listen(port, () => {
    console.log(`O servidor está executando na porta ${port}`)
})