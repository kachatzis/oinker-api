// Oauth
const oauthController = require('../controllers/oauth/oauthController')
const oauthAdminController = require('../controllers/oauth/oauthAdminController')

// App
const appAccountController = require('../controllers/app/appAccountController')
const appSmsController = require('../controllers/app/appSmsController')
const appBulkSmsController = require('../controllers/app/appBulkSmsController')
const appCampaignController = require('../controllers/app/appCampaignController')
//const appEmailController = require('../controllers/app/appEmailController')
//const appBulkEmailController = require('../controllers/app/appBulkEmailController')
//const appEmailCampaignController = require('../controllers/app/appEmailCampaignController')
//const appEmailServiceController = require('../controllers/app/appEmailServiceController')

// Dash
const dashLoginController = require('../controllers/dash/dashLoginController')
const dashAccountController = require('../controllers/dash/dashAccountController')
const dashAppController = require('../controllers/dash/dashAppController')
const dashCampaignController = require('../controllers/dash/dashCampaignController')
const dashSmsController = require('../controllers/dash/dashSmsController')
const dashBulkSmsController = require('../controllers/dash/dashBulkSmsController')
const dashCreditPurchaseController = require('../controllers/dash/dashCreditPurchaseController')

// Admin
const adminLoginController = require('../controllers/admin/adminLoginController')
const adminAccountController = require('../controllers/admin/adminAccountController')
const adminAppController = require('../controllers/admin/adminAppController')
const adminCampaignController = require('../controllers/admin/adminCampaignController')
const adminSmsController = require('../controllers/admin/adminSmsController')
const adminBulkSmsController = require('../controllers/admin/adminBulkSmsController')
const adminCreditPurchaseController = require('../controllers/admin/adminCreditPurchaseController')
const adminUserController = require('../controllers/admin/adminUserController')
const adminEmailController = require('../controllers/admin/adminEmailController')
const adminBulkEmailController = require('../controllers/admin/adminBulkEmailController')
const adminEmailCampaignController = require('../controllers/admin/adminEmailCampaignController')
const adminEmailServiceController = require('../controllers/admin/adminEmailServiceController')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

const routes = [



  
  //  /api/v1/oauth 
  {
    method: 'GET',
    url: '/api/v1/oauth/authorize',
    handler: oauthController.redirectAuthorize
  },
  {
    method: 'GET',
    url: '/api/v1/oauth/access_token',
    handler: oauthController.getAccessToken
  },
  {
    method: 'PUT',
    url: '/api/v1/oauth/updateApp/:id',
    handler: oauthController.updateApp
  },

  // Secure
  {
    method: 'POST',
    url: '/api/v1/oauth_admin/authorize',
    handler: oauthAdminController.authorize
  },





  
  //  /api/v1/app 

  //  /api/v1/app/account
  {
    method: 'GET',
    url: '/api/v1/app/account',
    handler: appAccountController.getAccount
  },
  {
    method: 'PUT',
    url: '/api/v1/app/account',
    handler: appAccountController.updateAccount
  },


  //  /api/v1/app/sms
  {
    method: 'GET',
    url: '/api/v1/app/sms',
    handler: appSmsController.getSms
  },
  {
    method: 'GET',
    url: '/api/v1/app/sms/:id',
    handler: appSmsController.getSingleSms
  },
  {
    method: 'POST',
    url: '/api/v1/app/sms',
    handler: appSmsController.addSms
  },
  {
    method: 'PUT',
    url: '/api/v1/app/sms/:id',
    handler: appSmsController.updateSms
  },

  
  //  /api/v1/app/bulk_sms
  {
    method: 'GET',
    url: '/api/v1/app/bulk_sms',
    handler: appBulkSmsController.getBulkSms
  },
  {
    method: 'GET',
    url: '/api/v1/app/bulk_sms/:id',
    handler: appBulkSmsController.getSingleBulkSms
  },
  {
    method: 'POST',
    url: '/api/v1/app/bulk_sms',
    handler: appBulkSmsController.addBulkSms
  },
  {
    method: 'PUT',
    url: '/api/v1/app/bulk_sms/:id',
    handler: appBulkSmsController.updateBulkSms
  },


  //  /api/v1/app/campaign
  {
    method: 'GET',
    url: '/api/v1/app/campaign',
    handler: appCampaignController.getCampaign
  },
  {
    method: 'GET',
    url: '/api/v1/app/campaign/:id',
    handler: appCampaignController.getSingleCampaign
  },
  {
    method: 'POST',
    url: '/api/v1/app/campaign',
    handler: appCampaignController.addCampaign
  },
  {
    method: 'PUT',
    url: '/api/v1/app/campaign/:id',
    handler: appCampaignController.updateCampaign
  },









  //  /api/v1/dash

  //  /api/v1/dash/login
  {
    method: 'POST',
    url: '/api/v1/dash/login',
    handler: dashLoginController.login
  },

  //  /api/v1/dash/account
  {
    method: 'GET',
    url: '/api/v1/dash/account',
    handler: dashAccountController.getAccount
  },
  {
    method: 'PUT',
    url: '/api/v1/dash/account',
    handler: dashAccountController.updateAccount
  },

  //  /api/v1/dash/apps
  {
    method: 'GET',
    url: '/api/v1/dash/apps',
    handler: dashAppController.getApps
  },
  {
    method: 'GET',
    url: '/api/v1/dash/apps/:id',
    handler: dashAppController.getSingleApp
  },
  {
    method: 'POST',
    url: '/api/v1/dash/apps',
    handler: dashAppController.addApp
  },
  {
    method: 'PUT',
    url: '/api/v1/dash/apps/:id',
    handler: dashAppController.updateApp
  },

  {
    method: 'GET',
    url: '/api/v1/dash/apps/:id/authentications',
    handler: dashAppController.getSingleAppAuthentications
  },


  //  /api/v1/dash/campaigns
  {
    method: 'GET',
    url: '/api/v1/dash/campaigns',
    handler: dashCampaignController.getCampaigns
  },
  {
    method: 'GET',
    url: '/api/v1/dash/campaigns/:id',
    handler: dashCampaignController.getSingleCampaign
  },
  {
    method: 'POST',
    url: '/api/v1/dash/campaigns',
    handler: dashCampaignController.addCampaign
  },
  {
    method: 'PUT',
    url: '/api/v1/dash/campaigns/:id',
    handler: dashCampaignController.updateCampaign
  },
    
    
  //  /api/v1/dash/sms
  {
    method: 'GET',
    url: '/api/v1/dash/sms',
    handler: dashSmsController.getSms
  },
  {
    method: 'GET',
    url: '/api/v1/dash/sms/:id',
    handler: dashSmsController.getSingleSms
  },
  {
    method: 'POST',
    url: '/api/v1/dash/sms',
    handler: dashSmsController.addSms
  },
  {
    method: 'PUT',
    url: '/api/v1/dash/sms/:id',
    handler: dashSmsController.updateSms
  },

    //  /api/v1/dash/bulk_sms
    {
      method: 'GET',
      url: '/api/v1/dash/bulk_sms',
      handler: dashBulkSmsController.getBulkSms
    },
    {
      method: 'GET',
      url: '/api/v1/dash/bulk_sms/:id',
      handler: dashBulkSmsController.getSingleBulkSms
    },
    {
      method: 'POST',
      url: '/api/v1/dash/bulk_sms',
      handler: dashBulkSmsController.addBulkSms
    },
    {
      method: 'PUT',
      url: '/api/v1/dash/bulk_sms/:id',
      handler: dashBulkSmsController.updateBulkSms
    },


  //  /api/v1/dash/credit_purchases
  {
    method: 'GET',
    url: '/api/v1/dash/credit_purchases',
    handler: dashCreditPurchaseController.getCreditPurchases
  },
  {
    method: 'GET',
    url: '/api/v1/dash/credit_purchases/:id',
    handler: dashCreditPurchaseController.getSingleCreditPurchase
  },










  //  /api/v1/admin

  //  /api/v1/admin/login
  {
    method: 'POST',
    url: '/api/v1/admin/login',
    handler: adminLoginController.login
  },

  //  /api/v1/admin/account
  {
    method: 'GET',
    url: '/api/v1/admin/account',
    handler: adminAccountController.getAccount
  },
  {
    method: 'PUT',
    url: '/api/v1/admin/account',
    handler: adminAccountController.updateAccount
  },

  //  /api/v1/admin/apps
  {
    method: 'GET',
    url: '/api/v1/admin/apps',
    handler: adminAppController.getApps
  },
  {
    method: 'GET',
    url: '/api/v1/admin/apps/:id',
    handler: adminAppController.getSingleApp
  },
  {
    method: 'POST',
    url: '/api/v1/admin/apps',
    handler: adminAppController.addApp
  },
  {
    method: 'PUT',
    url: '/api/v1/admin/apps/:id',
    handler: adminAppController.updateApp
  },

  {
    method: 'GET',
    url: '/api/v1/admin/apps/:id/authentications',
    handler: adminAppController.getSingleAppAuthentications
  },


  //  /api/v1/admin/campaigns
  {
    method: 'GET',
    url: '/api/v1/admin/campaigns',
    handler: adminCampaignController.getCampaigns
  },
  {
    method: 'GET',
    url: '/api/v1/admin/campaigns/:id',
    handler: adminCampaignController.getSingleCampaign
  },
  {
    method: 'POST',
    url: '/api/v1/admin/campaigns',
    handler: adminCampaignController.addCampaign
  },
  {
    method: 'PUT',
    url: '/api/v1/admin/campaigns/:id',
    handler: adminCampaignController.updateCampaign
  },
    
    
  //  /api/v1/admin/sms
  {
    method: 'GET',
    url: '/api/v1/admin/sms',
    handler: adminSmsController.getSms
  },
  {
    method: 'GET',
    url: '/api/v1/admin/sms/:id',
    handler: adminSmsController.getSingleSms
  },
  {
    method: 'POST',
    url: '/api/v1/admin/sms',
    handler: adminSmsController.addSms
  },
  {
    method: 'PUT',
    url: '/api/v1/admin/sms/:id',
    handler: adminSmsController.updateSms
  },

    //  /api/v1/admin/bulk_sms
    {
      method: 'GET',
      url: '/api/v1/admin/bulk_sms',
      handler: adminBulkSmsController.getBulkSms
    },
    {
      method: 'GET',
      url: '/api/v1/admin/bulk_sms/:id',
      handler: adminBulkSmsController.getSingleBulkSms
    },
    {
      method: 'POST',
      url: '/api/v1/admin/bulk_sms',
      handler: adminBulkSmsController.addBulkSms
    },
    {
      method: 'PUT',
      url: '/api/v1/admin/bulk_sms/:id',
      handler: adminBulkSmsController.updateBulkSms
    },


  //  /api/v1/admin/credit_purchases
  {
    method: 'GET',
    url: '/api/v1/admin/credit_purchases',
    handler: adminCreditPurchaseController.getCreditPurchases
  },
  {
    method: 'GET',
    url: '/api/v1/admin/credit_purchases/:id',
    handler: adminCreditPurchaseController.getSingleCreditPurchase
  },

  //  /api/v1/admin/users
  {
    method: 'GET',
    url: '/api/v1/admin/users',
    handler: adminUserController.getUsers
  },
  {
    method: 'GET',
    url: '/api/v1/admin/users/:id',
    handler: adminUserController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/v1/admin/users',
    handler: adminUserController.addUser
  },
  {
    method: 'PUT',
    url: '/api/v1/admin/users/:id',
    handler: adminUserController.updateUser
  },

  //  /api/v1/admin/email_services
  {
    method: 'GET',
    url: '/api/v1/admin/email_services',
    handler: adminEmailServiceController.getEmailServices
  },
  {
    method: 'GET',
    url: '/api/v1/admin/email_services/:id',
    handler: adminEmailServiceController.getSingleEmailService
  },
  {
    method: 'POST',
    url: '/api/v1/admin/email_services',
    handler: adminEmailServiceController.addEmailService
  },
  {
    method: 'PUT',
    url: '/api/v1/admin/email_services/:id',
    handler: adminEmailServiceController.updateEmailService
  },

  //  /api/v1/admin/bulk_emails
  {
    method: 'GET',
    url: '/api/v1/admin/bulk_emails',
    handler: adminBulkEmailController.getBulkEmails
  },
  {
    method: 'GET',
    url: '/api/v1/admin/bulk_emails/:id',
    handler: adminBulkEmailController.getSingleBulkEmail
  },
  {
    method: 'POST',
    url: '/api/v1/admin/bulk_emails',
    handler: adminBulkEmailController.addBulkEmail
  },
  {
    method: 'PUT',
    url: '/api/v1/admin/bulk_emails/:id',
    handler: adminBulkEmailController.updateBulkEmail
  },

  //  /api/v1/admin/emails
  {
    method: 'GET',
    url: '/api/v1/admin/emails',
    handler: adminEmailController.getEmails
  },
  {
    method: 'GET',
    url: '/api/v1/admin/emails/:id',
    handler: adminEmailController.getSingleEmail
  },
  {
    method: 'POST',
    url: '/api/v1/admin/emails',
    handler: adminEmailController.addEmail
  },
  {
    method: 'PUT',
    url: '/api/v1/admin/emails/:id',
    handler: adminEmailController.updateEmail
  },

  //  /api/v1/admin/email_campaigns
  {
    method: 'GET',
    url: '/api/v1/admin/email_campaigns',
    handler: adminEmailCampaignController.getEmailCampaigns
  },
  {
    method: 'GET',
    url: '/api/v1/admin/email_campaigns/:id',
    handler: adminEmailCampaignController.getSingleEmailCampaign
  },
  {
    method: 'POST',
    url: '/api/v1/admin/email_campaigns',
    handler: adminEmailCampaignController.addEmailCampaign
  },
  {
    method: 'PUT',
    url: '/api/v1/admin/email_campaigns/:id',
    handler: adminEmailCampaignController.updateEmailCampaign
  },




]

module.exports = routes
