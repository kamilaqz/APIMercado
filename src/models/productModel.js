const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    nome: {type: String, required: true, unique: true},
    preçoAtual: {type: Number, required: true},
    preçoPromoção: {type: Number},
    dataDeValidadePromoção: {type: Date},
    tipo: {type: String, required: true},
    descrição: {type: String, required: true},
})


module.exports = mongoose.model("ProductModel", productSchema)
