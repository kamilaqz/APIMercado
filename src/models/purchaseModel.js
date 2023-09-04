const mongoose = require('mongoose')
const Schema = mongoose.Schema

const purchaseSchema = new Schema({
    cliente: String,
    produto: String, 
    date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model("PurchaseModel", purchaseSchema)