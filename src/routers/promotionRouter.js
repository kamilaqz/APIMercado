'use strict'
const express = require('express');
const promotionRouter = express.Router();
const promotionController = require('../controllers/promotionController');

promotionRouter.route('/promotions/client/:id')
.get((req, res) => promotionController.promotionsForClient(req, res))

promotionRouter.route('/promotions')
.get((req, res) => promotionController.getPromotions(req, res))
.put((req, res) => promotionController.createPromotion(req, res))

promotionRouter.route("/promotion/create")
.post((req, res) => promotionController.createPromotion(req, res))

promotionRouter.route('/promotions/:id')
.delete((req, res) => productController.deleteProductById(req, res))

module.exports = promotionRouter