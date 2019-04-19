// External Dependancies
const boom = require('boom')

// Get Data Models
const AuthManager = require('../../utils/authManager')
const Email = require('../../models/Email')

// Get all Email
exports.getEmails = async (req, reply) => { 
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])
    
    const email = await Email.find()
    return email
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single Email by ID
exports.getSingleEmail = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])

    const id = req.params.id
    const email = await Email.findOne({"_id": id})
    return email
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Email
exports.addEmail = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])

    const email = new Email(req.body)
    return email.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing Email
exports.updateEmail = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])
    
    const id = req.params.id
    const email = req.body
    const { ...updateData } = email
    const update = await Email.findOneAndUpdate({"_id":id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}
