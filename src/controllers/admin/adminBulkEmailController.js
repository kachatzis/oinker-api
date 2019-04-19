// External Dependancies
const boom = require('boom')

// Get Data Models
const AuthManager = require('../../utils/authManager')
const BulkEmail = require('../../models/BulkEmail')

// Get all BulkEmail
exports.getBulkEmails = async (req, reply) => { 
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])
    
    const bulkEmail = await BulkEmail.find()
    return bulkEmail
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single BulkEmail by ID
exports.getSingleBulkEmail = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])

    const id = req.params.id
    const bulkEmail = await BulkEmail.findOne({"_id": id})
    return bulkEmail
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new BulkEmail
exports.addBulkEmail = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])

    const bulkEmail = new BulkEmail(req.body)
    return bulkEmail.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing BulkEmail
exports.updateBulkEmail = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["admin"])
    
    const id = req.params.id
    const bulkEmail = req.body
    const { ...updateData } = bulkEmail
    const update = await BulkEmail.findOneAndUpdate({"_id":id}, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}
