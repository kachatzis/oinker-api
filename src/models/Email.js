const mongoose = require('mongoose')

const email = new mongoose.Schema({
    emailCampaign : mongoose.Schema.Types.ObjectId,
    bulkEmail : mongoose.Schema.Types.ObjectId,
    user : mongoose.Schema.Types.ObjectId,
    campaign : mongoose.Schema.Types.ObjectId,
    emailService : mongoose.Schema.Types.ObjectId,
    subject : String,
    message : String,
    config : String
})

module.exports = mongoose.model('Email', email)
