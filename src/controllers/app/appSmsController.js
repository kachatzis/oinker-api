// External Dependancies
const boom = require('boom')

// Get Data Models
const Sms = require('../../models/Sms')
const User = require('../../models/User')
const Oauth = require('../../models/Oauth')

// Get all sms
exports.getSms = async (req, reply) => { 
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user
    
    const sms = await Sms.find({user : oauthUser})
    return sms
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single sms by ID
exports.getSingleSms = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    const id = req.params.id
    const sms = await Sms.findOne({"_id": id, "user": oauthUser})
    return sms
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Sms
exports.addSms = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    req.body.user = oauthUser
    const sms = new Sms(req.body)
    return sms.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing sms
exports.updateSms = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user
    
    const id = req.params.id
    const sms = req.body
    const { ...updateData } = sms
    const update = await Sms.findOneAndUpdate({"_id":id, "user":oauthUser}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}
