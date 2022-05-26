const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const { typeDefs, resolvers } = require('./schemas')
const { secret } = require('./common/vars')

const PORT = process.env.PORT || 3001
mongoose.connect('mongodb://localhost/graphqlGoals').then(() => {
  console.log('Successfully connecte to database')
})

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    let token = req.headers.authorization
    // "Bearer asjhdgasoydgasoydgasdoyagdaoudgasdoyadassa"
    if (token) {
      // [ "Bearer", "asjhdgasoydgasoydgasdoyagdaoudgasdoyadassa" ]
      token = token.split(' ')[1].trim()
    }

    if (!token) {
      return req
    }
    try {
      const user = jwt.verify(token, secret)
      req.user = user
    } catch (e) {
      console.log('invalid token', e)
    }
    return req
  },
})

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const startServer = async () => {
  await apolloServer.start()

  apolloServer.applyMiddleware({ app })
  app.listen(PORT, () => {
    console.log('App is running on PORT', PORT)
    console.log(
      `Graphql endpoint is on http://localhost:${PORT}${apolloServer.graphqlPath}`
    )
  })
}

startServer()
  .then(() => {
    console.log('Hi There')
  })
  .catch((e) => {
    console.log(e)
  })
