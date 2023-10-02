const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promotionSchema = new Schema({
    product: {type: String, required: true},
    discountPercentage: {type: Number, required: true},
})

module.exports = mongoose.model("PromotionModel", promotionSchema)