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
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    goals(username: String): [Goal]
    goal(_id: ID!): Goal
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGoal(GoalText: String!, completed: Boolean!): Goal
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
