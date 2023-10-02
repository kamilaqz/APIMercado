'use strict'
const express = require('express')
const employeeRouter = express.Router()
const employeeController = require('../controllers/employeeController')

employeeRouter.route('/employees')
.get((req, res) => employeeController.getEmployees(req, res))
.put((req, res) => employeeController.updateEmployee(req, res))

employeeRouter.route("/employee/create")
.post((req, res) => employeeController.createEmployee(req, res))

employeeRouter.route('/employee/:id')
.get((req, res) => employeeController.getEmployeeById(req, res))
.delete((req, res) => employeeController.deleteEmployeeById(req, res))

employeeRouter.route('/employee/login')
.post((req, res) => employeeController.loginEmployee(req, res))

module.exports = employeeRouter