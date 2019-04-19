// External Dependancies
const boom = require('boom')

// Get Data Models
const EmailService = require('../../models/EmailService')

// Get all EmailService
exports.getEmailServices = async (req, reply) => { 
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])
    
    const emailService = await EmailService.find()
    return emailService
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single EmailService by ID
exports.getSingleEmailService = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])

    const id = req.params.id
    const emailService = await EmailService.findOne({"_id": id})
    return emailService
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new EmailService
exports.addEmailService = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])

    //req.body.user = oauth.user
    const emailService = new EmailService(req.body)
    return emailService.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing EmailService
exports.updateEmailService = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])
    
    const id = req.params.id
    const emailService = req.body
    const { ...updateData } = emailService
    const update = await EmailService.findOneAndUpdate({"_id":id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}
