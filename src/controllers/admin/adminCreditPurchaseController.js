// External Dependancies
const boom = require('boom')

// Get Data Models
const CreditPurchase = require('../../models/CreditPurchase')
const User = require('../../models/User')
const Oauth = require('../../models/Oauth')

// Get all CreditPurchase
exports.getCreditPurchases = async (req, reply) => { 
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user
    
    const creditPurchase = await CreditPurchase.find({user : oauthUser})
    return creditPurchase
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single CreditPurchase by ID
exports.getSingleCreditPurchase = async (req, reply) => {
  try {
    const access_token = req.headers["access-token"]
    const oauth = await Oauth.findOne({"access_token": access_token})
    const oauthUser = oauth.user

    const id = req.params.id
    const creditPurchase = await CreditPurchase.findOne({"_id": id, "user": oauthUser})
    return creditPurchase
  } catch (err) {
    throw boom.boomify(err)
  }
}


/* Implement credit purchase through paypal */
