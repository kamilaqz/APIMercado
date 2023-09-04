const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promotionSchema = new Schema({
    produto: {type: String, required: true},
    descontoEmPorcentagem: {type: Number, required: true},
})

module.exports = mongoose.model("PromotionModel", promotionSchema)