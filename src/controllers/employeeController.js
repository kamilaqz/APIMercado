const EmployeeModel = require('../models/employeeModel')
const jwtService = require('jsonwebtoken')

module.exports= {
    createEmployee: async (req, res) => {
        try {
            const result = await EmployeeModel.create(req.body)
            res.status(201).json({message: `Funcionário cadastrado com sucesso!`})
        } catch (err) {
            res.status(500).json({message: `Não foi possível cadastrar funcionário.`})
        }
    },
    getEmployees: (req, res) => {
        EmployeeModel.find({}).select(["-__v", "-_id"]).then((result) => {
            res.status(200).json(result)
        }).catch(() => {
            res.status(500).json({message: "Não foi possível encontrar funcionários."})
        })
    },
    getEmployeeById: async (req, res) => {
        try {
            const result = await EmployeeModel.findById({id: req.body.id})
            res.status(200).send(result)
        } catch (err) {
            res.status(500).json({message: "Não foi possível encontrar."})
        }
    },
    deleteEmployeeById: async (req, res) => {
        try {
            const result = await EmployeeModel.deleteOne({id: req.params.id})
            res.status(200).send({message: "Funcionário removido!"})
        } catch (err) {
            res.status(500).json({message: "Não foi possível remover."})
        }
    },
    updateEmployee: async (req, res) => {
        try {
            const result = await EmployeeModel.updateOne({id: req.body.id}, req.body)
            res.status(200).send({message: 'Dados atualizados com sucesso!'})
        } catch (err) {
            res.status(500).json({message: 'Não foi possível atualizar os dados.'})
        }
    },
    getEmployeeByCPF: async (req, res) => {
        try{
            const result = await EmployeeModel.findOne({ cpf: req.params.cpf })
            res.status(200).send(result)
        }catch (err) {
            res.status(500).json({message: "Não foi possível encontrar o funcionário."})
        } 
    },

    loginEmployee: async (req, res) => {
        const result = await EmployeeModel.findOne({nome: req.body.nome, cpf: req.body.cpf})
        if(!result) {
            res.status(401).json({message: "Usuario não autorizado"})
            return next()
        } 
        const secret = process.env.SECRET
        jwtService.sign(req.body, secret, (err, token) => {
            if (err) {
                res.status(401).json({message: "Usuario não autorizado"})
            }
            res.set("Access-Token", token)
            res.end()
        })
    }
}