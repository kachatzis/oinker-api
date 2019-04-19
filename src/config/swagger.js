exports.options = {
  routePrefix: '/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Oinker API',
      description: 'Oinker Campaign Manager API',
      version: '1.0.0',
      contact: {
        email: "apiteam@swagger.io"
      },
      license: {
          name: "Apache 2.0",
          url: "http://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here'
    },
    host: process.env.HOST || '127.0.0.1',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    
    "security": [
      {
          "Access Token": []
      }
  ],
  "components": {
      "links": {},
      "callbacks": {},
      "schemas": {
          "NewSchema": {
              "type": "object"
          }
      },
      "securitySchemes": {
          "oAuth2": {
              "type": "oauth2"
          },
          "Access Token": {
              "type": "apiKey",
              "name": "Access-Token",
              "in": "header"
          }
      }
    }
 



  }
}
