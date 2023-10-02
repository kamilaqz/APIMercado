const mongoose = require('mongoose')
const Schema = mongoose.Schema

const purchaseSchema = new Schema({
    clientId: {type: Number, required: true},
    productId: {type: Number, required: true},
    date: {type: Date, default: Date.now},
  });

  module.exports = mongoose.model("PurchaseModel", purchaseSchema)