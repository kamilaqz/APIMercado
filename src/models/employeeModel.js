const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    nome: {type: String, required: true},
    cpf: {type: String, required: true, unique: true},
    identificador: {type: Number, required: true, unique: true}
})

module.exports = mongoose.model("EmployeeModel", employeeSchema)