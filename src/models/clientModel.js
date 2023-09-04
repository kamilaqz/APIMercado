const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    nome: {type: String, required: true},
    cpf: {type: String, required: true, unique: true},
    idade: {type: Number, required: true}
})

module.exports = mongoose.model("ClientModel", clientSchema)