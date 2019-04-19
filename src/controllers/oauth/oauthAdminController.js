// External Dependancies
const boom = require('boom')

const Oauth = require('../../models/Oauth')
const App = require('../../models/App')
const User = require('../../models/User')
const oauthUrl = "http://127.0.0.1/oauth"
var crypto = require('crypto');

const querystring = require('query-string')


exports.authorize = async (req, reply) => {
  try {
    const oauth_secret = req.headers["oauth-secret"]
    if(oauth_secret != process.env.OAUTH_SECRET){
      throw Error("OAuth-Secret Not Allowed")
    }
    //const oauth = await Oauth.findOne({"access_token": access_token})
    //const oauthUser = oauth.user

    const user = await User.findOne({"username": req.body.username, "password": req.body.password})
    const appc = await App.findOne({"client_id": req.body.client_id})
    
    var data = req.body.client_id+user._id+appc._id+new Date();
    crypto.createHash('sha256').update(data).digest("hex");

    var oauth = new Oauth({
      "client_id": req.body.client_id, 
      "scope": req.body.scope, 
      "user": user._id,
      "redirect_url": req.body.redirect_url,
      "auth_date" : new Date(),
      "is_expired" : false,
      "app" :  appc._id,
      "is_authorized" : false,
      "code" : crypto.createHash('sha256').update(data).digest("hex"),
      "access_token" : crypto.createHash('sha256').update(data+process.env.SALT).digest("hex")
    })

    oauth.save()

    return {
      "success": true,
      "code": oauth.code,
      "scope": oauth.scope,
      "auth_date": oauth.auth_date,
      "redirect_url" : oauth.redirect_url
    }
  } catch (err) {
    throw boom.boomify(err)
  }
}