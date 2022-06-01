import React from 'react';
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
// import { ApolloProvider } from "@apollo/react-hooks";
import loginForm from './pages/loginForm';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import findGoal from './pages/findGoal';
// import Home from '../pages/Home';
import {setContext} from '@apollo/client/link/context'



// boiler plate code from 21 challenge 
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
        {/* <> */}
          <Header />
          {/* <Switch> */}
          <Routes>
            <div className="container">
              
              <Route 
                exact path="/" 
               element={ <loginForm />}
              />

              
            </div>
            {/* <Route exact path="/" component={ loginForm } />

            {/* <Route exact path="/saved" component={  } /> */}

            {/* <Route exact path="" component={  } /> */}
            <Route exact path="/findGoal/:id" component={ findGoal }/>

            <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */
          {/* </Switch> */}
          </Routes>
        <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;