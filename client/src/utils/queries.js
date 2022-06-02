import gql from 'graphql-tag'

export const QUERY_GOALS = gql`
  query goals($username: String) {
    goals(username: $username) {
      _id
      goalText
      createdAt
      username
    }
  }
`

export const QUERY_GOAL = gql`
  query goal($id: ID!) {
    goal(_id: $id) {
      _id
      goalText
      createdAt
      username
    }
  }
`
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      goals {
        _id
        goalText
        createdAt
      }
    }
  }
`
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email

      goals {
        _id
        goalText
        createdAt
      }
    }
  }
`

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`
