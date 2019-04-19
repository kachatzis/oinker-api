// External Dependancies
const boom = require('boom')

// Get Data Models
const User = require('../../models/User')
const Oauth = require('../../models/Oauth')
const AuthManager = require('../../utils/authManager')

// Get current User
exports.getAccount = async (req, reply) => {
  try {
    const oauth = await AuthManager.check(req, reply, ["dash"])
    const user = await User.findById(oauth.user)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing user
exports.updateAccount = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.find({"access_token": access_token})
    const oauthUser = oauth[0].user
    
    const user = req.body
    const { ...updateData } = user
    const update = await User.findByIdAndUpdate(oauthUser, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

  