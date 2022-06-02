const jwt = require('jsonwebtoken')

const secret = 'mysecretssshhhhhhh'
const expiration = '2h'

module.exports = {
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id }
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
  },

  authMiddleware: function ({ req }) {
    //this will allows token to be sent via req.body, req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim()
    }

    if (!token) {
      return req
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration })
      req.user = data
    } catch (err) {
      console.error(err)
      console.log('Invalid token')
    }

    return req
  },
}
