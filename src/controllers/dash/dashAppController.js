// External Dependancies
const boom = require('boom')

// Get Data Models
const App = require('../../models/App')
const User = require('../../models/User')
const Oauth = require('../../models/Oauth')

// Get all App
exports.getApps = async (req, reply) => { 
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user
    
    const app = await App.find({user : oauthUser})
    return app
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single App by ID
exports.getSingleApp = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    const id = req.params.id
    const app = await App.findOne({"_id": id, "user": oauthUser})
    return app
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new App
exports.addApp = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    req.body.user = oauthUser
    const app = new App(req.body)
    return app.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing App
exports.updateApp = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user
    
    const id = req.params.id
    const app = req.body
    const { ...updateData } = app
    const update = await App.findOneAndUpdate({"_id":id, "user":oauthUser}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}


// Get single App Authentications by ID
exports.getSingleAppAuthentications = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    const id = req.params.id
    const app = await App.findOne({"_id": id, "user": oauthUser})

    const usedOauths = await Oauth.find({"app": app._id})
    return usedOauths
  } catch (err) {
    throw boom.boomify(err)
  }
}
