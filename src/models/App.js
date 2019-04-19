const mongoose = require('mongoose')

const appSchema = new mongoose.Schema({
    name : String,
    user : mongoose.Schema.Types.ObjectId,
    scope : String,
	client_id : String,
    client_secret : String,
    enabled : Boolean,
    redirect_url : String
})

module.exports = mongoose.model('App', appSchema) 
