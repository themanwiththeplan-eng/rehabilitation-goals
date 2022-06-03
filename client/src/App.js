import React from 'react'
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from '@apollo/react-hooks'
import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import LoginPage from './pages/loginForm'
import Signup from './pages/Signup'
import FindGoal from './pages/findGoal'
import Header from './components/Header'
import Footer from './components/Footer'

// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem('id_token')

//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : '',
//       },
//     })
//   },
//   uri: '/graphql',
// })
const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<Signup />} />

              {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
              <Route path="/goals/:goalId" element={<FindGoal />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App
