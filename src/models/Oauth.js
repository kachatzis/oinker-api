const mongoose = require('mongoose')

const oauthSchema = new mongoose.Schema({
    app : mongoose.Schema.Types.ObjectId,
    user : mongoose.Schema.Types.ObjectId,
    scope : String,
    access_token : String,
    code : String,
    client_id : String,
    auth_date : Date,
    expiration_date : Date,
    is_expired : Boolean,
    is_authorized : Boolean,
    redirect_url : String
})

module.exports = mongoose.model('Oauth', oauthSchema)
