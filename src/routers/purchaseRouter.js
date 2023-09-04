'use strict'
const express = require('express')
const purchaseRouter = express.Router()
const purchaseController = require('../controllers/purchaseController')

purchaseRouter.route('/purchase')
.post((req, res) => purchaseController.realizarCompra(req, res))

module.exports = purchaseRouter