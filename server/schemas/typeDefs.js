const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    goals: String
  }
  type Goal {
    _id: ID!
    text: String
    completed: Boolean
    createdAt: String
    timeCompleted: String
    timeChanged: String
    userId: String
    user: User
  }
  type Auth {
    user: User
    token: String
  }

  type Query {
    getUsers: [User]
    getUser(id: String!): User
    getGoals: [Goal]
    getGoal: Goal
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    createGoal(text: String!, completed: Boolean!): Goal
    removeGoal(_id: ID!): Goal
    updateGoal(
      _id: ID!
      text: String!
      timeChanged: String
      completed: Boolean!
    ): Goal
  }
`

module.exports = typeDefs
