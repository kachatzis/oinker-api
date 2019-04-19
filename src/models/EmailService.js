const mongoose = require('mongoose')

const emailServiceSchema = new mongoose.Schema({
    name : String,
    sender : String,
    domain : String,
    user : mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('EmailService', emailServiceSchema) 
