const mongoose = require('mongoose')

const bulkEmail = new mongoose.Schema({
    emailCampaign : mongoose.Schema.Types.ObjectId,
    user : mongoose.Schema.Types.ObjectId,
    campaign : mongoose.Schema.Types.ObjectId,
    emailService : mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('BulkEmail', bulkEmail)
