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
    GoalText: String
    completed: Boolean
    createdAt: String
    username: String
  }
  type Auth {
    user: User
    token: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    goals(username: String): [Goal]
    goal(_id: ID!): Goal
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    createGoal(GoalText: String!, completed: Boolean!): Goal
    removeGoal(_id: ID!): Goal
    # addGoal(goalAuthor: String!, goalString: String!): Goal

    updateGoal(
      _id: ID!
      text: String!
      timeChanged: String
      completed: Boolean!
    ): Goal
  }
`

module.exports = typeDefs
