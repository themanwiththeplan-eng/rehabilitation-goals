import React from 'react';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

const GoalList = ({ goals, title }) => {
  if (!goals.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {goals &&
        goals.map((goals) => (
          <div key={goals._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {goals.thoughtAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this thought on {goals.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{goals.goalString}</p>
            </div>
            {/* Create a link to this thought's page to view its comments using `<Link>` component */}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/goals/${goals._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default GoalList;
