const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    id: {type: Number, required: true, unique: true, min_length: 3},
    nome: {type: String, required: true, unique: true},
    precoAtual: {type: Number, required: true},
    precoPromocao: {type: Number},
    dataDeValidade: {type: Date, required: true},
    tipo: {type: String, required: true},
    descricao: {type: String, required: true},
})


module.exports = mongoose.model("ProductModel", productSchema)
