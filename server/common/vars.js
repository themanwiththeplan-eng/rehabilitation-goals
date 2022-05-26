//to decode JWT token
const secret = process.env.JWT_SECRET
console.log(secret)
// expiration for JWT
const expiration = '2h'

module.exports = {
  secret,
  expiration,
}
