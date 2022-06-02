const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const path = require('path')

const db = require('./config/connection')
const { typeDefs, resolvers } = require('./schemas')
const { authMiddleware } = require('./utils/auth')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3001
const app = express()
// mongoose.connect('mongodb://localhost/graphqlGoals').then(() => {
//   console.log('Successfully connecte to database')
// })

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  })
  await server.start()
  server.applyMiddleware({ app })
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
}

startServer()

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use('api/goals', require('./routes/goalRoutes'))

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
  })
})
