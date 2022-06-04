const { Schema } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const goalSchema = new Schema(
  {
    goalText: {
      type: String,
      required: 'Create your goal!',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
)

// const Goal = model('Goal', goalSchema)

module.exports = goalSchema;
