'use strict'
const express = require('express')
const clientRouter = express.Router()
const clientController = require('../controllers/clientController')

clientRouter.route('/clients')
.get((req, res) => clientController.getClients(req, res))
.post((req, res) => clientController.createClient(req, res))
.put((req, res) => clientController.updateClient(req, res))

clientRouter.route('/client/:id')
.get((req, res) => clientController.getClientById(req, res))
.delete((req, res) => clientController.deleteClientById(req, res))

clientRouter.route('/loginClient').post((req, res) => clientController.loginClient(req, res))

module.exports = clientRouter