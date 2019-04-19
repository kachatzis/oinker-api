// External Dependancies
const boom = require('boom')

// Get Data Models
const BulkSms = require('../../models/BulkSms')
const User = require('../../models/User')
const Oauth = require('../../models/Oauth')

// Get all sms
exports.getBulkSms = async (req, reply) => { 
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    const bulkSms = await BulkSms.find({user : oauthUser})
    return bulkSms
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single sms by ID
exports.getSingleBulkSms = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    const id = req.params.id
    const bulkSms = await BulkSms.findOne({"_id":id, "user": oauthUser})
    return bulkSms
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Sms
exports.addBulkSms = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    req.body.user = oauthUser
    const bulkSms = new BulkSms(req.body)
    return bulkSms.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing sms
exports.updateBulkSms = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    const id = req.params.id
    const bulkSms = req.body
    const { ...updateData } = bulkSms
    const update = await BulkSms.findOneAndUpdate({"_id": id, "user": oauthUser}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}
