const { User, Goal } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    goals: async (parent, { username }) => {
      const params = username ? { username } : {}
      return Goal.find(params).sort({ createdAt: -1 })
    },
    goal: async (parent, { _id }) => {
      return Goal.findOne({ _id })
    },
    users: async () => {
      return User.find().select('-__v -password').populate('goals')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('goals')
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('thoughts')

        return userData
      }
      throw new AuthenticationError('Not logged in!')
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user)

      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('Incorrect credentials!')
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials!')
      }

      const token = signToken(user)
      return { token, user }
    },
    addGoal: async (parent, args, context) => {
      if (context.user) {
        const goal = await Goal.create({
          ...args,
          username: context.user.username,
        })

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { goals: goal._id } },
          { new: true }
        )

        return goal
      }

      throw new AuthenticationError('You need to be logged in!')
    },
  },
}

module.exports = resolvers
