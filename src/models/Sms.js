const mongoose = require('mongoose')

const smsSchema = new mongoose.Schema({
	message : String,
	recipient : Number,
	final_recipient : String,
	date : Date,
	country_code : String,
	state : String,
	bulk_sms : mongoose.Schema.Types.ObjectId,
	user : mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('Sms', smsSchema)
