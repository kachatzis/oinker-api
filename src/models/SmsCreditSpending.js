const mongoose = require('mongoose')

const smsCreditSpendingSchema = new mongoose.Schema({
	user : ObjectId,
    sms : OnjectId,
    credit : Number
})

module.exports = mongoose.model('SmsCreditSpending', smsCreditSpendingSchema)
