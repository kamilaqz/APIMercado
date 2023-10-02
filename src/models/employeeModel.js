const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    id: {type: Number, required: true, unique: true, min_length: 3},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    cpf: {type: String, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, min_length: 8}
})

module.exports = mongoose.model("EmployeeModel", employeeSchema)