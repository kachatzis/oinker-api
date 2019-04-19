// External Dependancies
const boom = require('boom')

const Oauth = require('../../models/Oauth')
const App = require('../../models/App')
const User = require('../../models/User')
const oauthUrl = "http://127.0.0.1/oauth"

const querystring = require('query-string')

exports.updateApp = async (req, reply) => {
  try {
    const id = req.params.id
    const user = req.body
    const { ...updateData } = user
    const app = await App.findOneAndUpdate(id, updateData, {new:true})
    return app.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}
/*

exports.addApp = async (req, reply) => {
  try {
    const app = new App(req.body)
    return app.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

exports.addOauth = async (req, reply) => {
  try {
    const oauth = new Oauth(req.body)
    return oauth.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}*/

exports.getAccessToken = async (req, reply) => {
  try {
    const oauth = await Oauth.find({"code": req.query.code})
    return { "access_token" : oauth[0].access_token, "success": true }
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