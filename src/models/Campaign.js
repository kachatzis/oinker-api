const mongoose = require('mongoose')

const campaignSchema = new mongoose.Schema({
    name : String,
    user : mongoose.Schema.Types.ObjectId,
})

module.exports = mongoose.model('Campaign', campaignSchema) 
