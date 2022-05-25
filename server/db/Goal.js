const { Schema, model } = require('mongoose')

const goalSchema = new Schema({
  text: String,
  completed: Boolean,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = model('Goal', goalSchema)
