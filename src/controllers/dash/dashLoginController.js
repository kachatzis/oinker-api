// External Dependancies
const boom = require('boom')

const Oauth = require('../../models/Oauth')
const App = require('../../models/App')
const User = require('../../models/User')


exports.login = async (req, reply) => {
  try {
    const user = await User.findOne({"email":req.body.username, "hash":req.body.password})
    if(user==null){
      return {"success":false, "message":"User not found"}
    }
    const oauth = new Oauth({"user":user._id, "scope":"dash", "access_token":user._id+user.email+user.hash})
    oauth.save()
    return { "access_token" : oauth.access_token, "success": true }
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.redirectAuthorize = async (req, reply) => {
  /*reply.header("Location", oauthUrl);
  //reply.end();*/
  reply.redirect(oauthUrl+"?"+querystring.stringify(req.query))
  return "";
}