const path = require('path')
const express = require('express')
const db = require('./config/connection')
const { ApolloServer } = require('apollo-server-express')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const mongoose = require('mongoose')
const { typeDefs, resolvers } = require('./schemas')
const { authMiddleware } = require('./utils/auth')

const PORT = process.env.PORT || 3001

// mongoose.connect('mongodb://localhost/graphqlGoals').then(() => {
//   console.log('Successfully connecte to database')
// })

const app = express()


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
})

// server.applyMiddleware({ app })

//middleware 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// app.use('api/goals', require('./routes/goalRoutes'))

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/public/index.html')))
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start()
  server.applyMiddleware({ app })
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      )
    })
  })
}
// Call the async function to start the server
startApolloServer(typeDefs, resolvers)

