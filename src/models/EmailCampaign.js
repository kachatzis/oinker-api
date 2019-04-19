const mongoose = require('mongoose')

const emailCampaign = new mongoose.Schema({
    campaign : mongoose.Schema.Types.ObjectId,
    user : mongoose.Schema.Types.ObjectId,
    emailService : mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('EmailCampaign', emailCampaign)
