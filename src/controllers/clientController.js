const ClientModel = require('../models/clientModel')
const jwtService = require('jsonwebtoken')

module.exports= {
    createClient: async (req, res) => {
        try {
            const result = await ClientModel.create(req.body)
            res.status(201).json({message: `Cliente cadastrado com sucesso!`})
        } catch (err) {
            console.log(err)
            res.status(500).json({message: `Não foi possível cadastrar cliente.`})
        }
    },
    getClients: (req, res) => {
        ClientModel.find({}).select(["-__v", "-_id"]).then((result) => {
            res.status(200).json(result)
        }).catch(() => {
            res.status(500).json({message: "Não foi possível encontrar os clientes."})
        })
    },
    getClientById: async (req, res) => {
        try {
            const result = await ClientModel.findById({id: req.body.id})
            res.status(200).send(result)
        } catch (err) {
            res.status(500).json({message: "Não foi possível encontrar o cliente."})
        }
    },
    deleteClientById: async (req, res) => {
        try {
            const result = await ClientModel.deleteOne({id: req.params.id})
            res.status(200).send({message: "Cliente removido!"})
        } catch (err) {
            res.status(500).json({message: "Não foi possível remover o cliente."})
        }
    },
    updateClient: async (req, res) => {
        try {
            const result = await ClientModel.updateOne({id: req.body.id}, req.body)
            res.status(200).send({message: 'Dados atualizados com sucesso!'})
        } catch (err) {
            res.status(500).json({message: 'Não foi possível atualizar os dados.'})
        }
    },
    getClientByCPF: async (req, res) => {
        try{
            const result = await ClientModel.findOne({ cpf: req.params.cpf })
            res.status(200).send(result)
        }catch (err) {
            res.status(500).json({message: "Não foi possível encontrar o cliente."})
        } 
    },
    loginClient: async (req, res) => {
            const result = await ClientModel.findOne({ email: req.body.email, password: req.body.password })
    
            if (!result) {
                res.status(401).json({ message: "Usuário não autorizado" })
            } else {
                const secret = process.env.SECRET
                jwtService.sign(req.body, secret, {expiresIn: 86400} ,(err, token) => {
                    if (err) {
                        res.status(401).json({ message: "Usuário não autorizado" })
                    } else {
                        res.set("Access-Token", token);
                        res.end()
                    }
                })
            }
    }
}