'use strict'
const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productController')

productRouter.route('/products')
.get((req, res) => productController.getProducts(req, res))
.post((req, res) => productController.createProduct(req, res))
.put((req, res) => productController.updateProduct(req, res))

productRouter.route('/product/:id')
.get((req, res) => productController.getProductById(req, res))
.delete((req, res) => productController
.deleteProductById(req, res))

productRouter.route('/updateByType')
.put((req, res) => productController.updateProductByType(req, res))

module.exports = productRouter