const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    fullName: String
    sayGreetings: String
    userGoals: [Goal]
  }
  type Goal {
    _id: ID!
    text: String
    completed: Boolean
    timesCompleted: Int
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
    login(firstName: String!, password: String!): Auth
    createGoal(text: String!, completed: Boolean!): Goal
    createUser(firstName: String!, lastName: String!, password: String!): User
  }
`

module.exports = typeDefs
