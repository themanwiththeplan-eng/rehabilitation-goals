const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
})

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10
    // hashing is a 1 way street
    this.password = await bcrypt.hash(this.password, saltRounds)
  }
  next()
})

module.exports = model('User', userSchema)
