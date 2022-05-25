const { AuthenticationError } = require('apollo-server-express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { secret, expiration } = require('../common/vars')

const { Goal, User } = require('../db')

const resolvers = {
  Query: {
    goals: async () => {
      try {
        return await Goal.find({})
      } catch (e) {
        throw new Error(e)
      }
    },
    users: async (root, args) => {
      try {
        return await User.find({})
      } catch (e) {
        throw new Error(e)
      }
    },
    user: async (root, { id }) => {
      try {
        return await User.findById(id)
      } catch (e) {
        throw new Error(e)
      }
    },
  },

  Mutation: {
    createGoal: async (root, { text, completed }, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          'Patient must be logged in to create a goal'
        )
      }
      try {
        // { text: 'some stuff', completed: true  }
        return await Goal.create({
          text,
          completed,
          userId: context.user._id,
        })
      } catch (e) {
        throw new Error(e)
      }
    },
    createUser: async (root, { firstName, lastName, password }) => {
      try {
        return await User.create({ firstName, lastName, password })
      } catch (e) {
        throw new Error(e)
      }
    },
    login: async (root, { firstName, password }, context) => {
      try {
        const foundUser = await User.findOne({ firstName })

        if (!foundUser) {
          throw new AuthenticationError('No user found with this first name')
        }

        const isCorrectPassword = await bcrypt.compare(
          password,
          foundUser.password
        )

        if (!isCorrectPassword) {
          throw new AuthenticationError('Incorrect password')
        }

        // what data do we want to put in the token
        //
        const token = jwt.sign(
          { _id: foundUser._id, firstName: foundUser.firstName },
          secret,
          { expiresIn: expiration }
        )

        return {
          token,
          user: foundUser,
        }
      } catch (e) {
        throw new Error(e)
      }
    },
  },
  User: {
    fullName: (root) => {
      return `${root.firstName} ${root.lastName}`
    },
    sayGreetings: (root) => {
      return `Hi my name is ${root.firstName}`
    },
    userGoals: async (root) => {
      try {
        return await Goal.find({ userId: root._id })
      } catch (e) {
        console.log('97')
        throw new Error(e)
      }
    },
  },
  Goal: {
    user: async (root) => {
      try {
        return await User.findById(root.userId)
      } catch (e) {
        throw new Error(e)
      }
    },
  },
}
module.exports = resolvers
