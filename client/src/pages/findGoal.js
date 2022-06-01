import React from 'react';

// Import the `useParams()` hook from React Router
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_GOAL } from '../utils/queries';

const SingleGoal = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { goalId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_GOAL, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { goalId: goalId },
  });

  const goal = data?.goal || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {goal.user} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {goal.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {goal.text}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleGoal;
