import { gql } from '@apollo/client';

export const QUERY_GOALS = gql`
  query getGoals {
    goals {
      _id
      goalString
      goalAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_GOAL = gql`
  query getSingleGoal($goalId: ID!) {
    goal(goalId: $goalId) {
      _id
      goalString
      goalAuthor
      createdAt
    }
  }
`;
