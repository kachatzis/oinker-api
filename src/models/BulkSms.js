const mongoose = require('mongoose')

const bulkSmsSchema = new mongoose.Schema({
	name : String,
    date : Date,
    message : String,
	number_of_sms : Number,
	country_code : String,
    info : String,
    user : mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('BulkSms', bulkSmsSchema)
