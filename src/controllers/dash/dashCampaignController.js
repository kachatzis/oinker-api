// External Dependancies
const boom = require('boom')

// Get Data Models
const Campaign = require('../../models/Campaign')
const User = require('../../models/User')
const Oauth = require('../../models/Oauth')

// Get all Campaign
exports.getCampaigns = async (req, reply) => { 
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user
    
    const campaign = await Campaign.find({user : oauthUser})
    return campaign
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single Campaign by ID
exports.getSingleCampaign = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    const id = req.params.id
    const campaign = await Campaign.findOne({"_id": id, "user": oauthUser})
    return campaign
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Campaign
exports.addCampaign = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    req.body.user = oauthUser
    const campaign = new Campaign(req.body)
    return campaign.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing Campaign
exports.updateCampaign = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user
    
    const id = req.params.id
    const campaign = req.body
    const { ...updateData } = campaign
    const update = await Campaign.findOneAndUpdate({"_id":id, "user":oauthUser}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}
