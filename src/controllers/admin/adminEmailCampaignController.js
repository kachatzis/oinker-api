// External Dependancies
const boom = require('boom')

// Get Data Models
const AuthManager = require('../../utils/authManager')
const EmailCampaign = require('../../models/EmailCampaign')

// Get all EmailCampaign
exports.getEmailCampaigns = async (req, reply) => { 
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])
    
    const emailCampaign = await EmailCampaign.find()
    return emailCampaign
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single EmailCampaign by ID
exports.getSingleEmailCampaign = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])

    const id = req.params.id
    const emailCampaign = await EmailCampaign.findOne({"_id": id})
    return emailCampaign
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new EmailCampaign
exports.addEmailCampaign = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])

    const emailCampaign = new EmailCampaign(req.body)
    return emailCampaign.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing EmailCampaign
exports.updateEmailCampaign = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])
    
    const id = req.params.id
    const emailCampaign = req.body
    const { ...updateData } = emailCampaign
    const update = await EmailCampaign.findOneAndUpdate({"_id":id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}
