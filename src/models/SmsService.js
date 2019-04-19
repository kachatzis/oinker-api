const mongoose = require('mongoose')

const smsServiceSchema = new mongoose.Schema({
    name : String,
    enabled : Boolean,
    country_code : String,
    credit : Number
})

module.exports = mongoose.model('SmsService', smsServiceSchema)
