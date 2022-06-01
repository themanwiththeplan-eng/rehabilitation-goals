import { gql } from '@apollo/client';

export const ADD_GOAL = gql`
  mutation addGoal($goalString: String!, $goalAuthor: String!) {
    addGoal(goalString: $goalString, goalAuthor: $goalAuthor) {
      _id
      goalString
      goalAuthor
      createdAt
      user{
          username
      }
    }
  }
`;

