const boom = require('boom')

const User = require('../models/User')
const Oauth = require('../models/Oauth')
const App = require('../models/App')
const OauthConfig = require('../config/oauth')

exports.check = async (req, reply, allowedScopes) => {
  try {
    var oauth = await Oauth.findOne({"access_token": req.headers["access-token"]})
    if(oauth==null){
        throw Error("Access Token Not Found")
    }
    if(oauth.expiration_date < new Date()){
      oauth.is_expired = true
    }
    oauth.save()
    if(oauth.is_expired){
        throw Error("Access Token Expired")
    }

    var appScopes = oauth.scope.split(',')
    var scopeAllowed = false
    for(var i = 0; i<allowedScopes.length; i++){
      for(var j = 0; j<appScopes.length; j++){
        if(allowedScopes[i]==appScopes[j]){
          scopeAllowed = true
          break;
        }
      }
    }
    if(!scopeAllowed){
      throw Error("Scope Not Allowed")
    }


    return oauth
  } catch (err) {
    throw boom.boomify(err)
  }
}
