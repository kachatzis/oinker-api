const mongoose = require('mongoose')

const creditPurchaseSchema = new mongoose.Schema({
    user : mongoose.Schema.Types.ObjectId,
    credit : Number,
    date : Date,
    valid : Boolean
})

module.exports = mongoose.model('CreditPurchase', creditPurchaseSchema)
