import React from 'react'
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom'

const GoalList = ({ goals, title }) => {
  if (!goals) {
    return <h3>No Thoughts Yet</h3>
  }

  return (
    <div>
      <h3>{title}</h3>
      {goals &&
        goals.map((goal) => (
          <div key={goal._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {goal.username} <br />
              <span style={{ fontSize: '1rem' }}>
                had this thought on {goal.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{goal.goalText}</p>
            </div>
            {/* Create a link to this thought's page to view its comments using `<Link>` component */}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/goals/${goal._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  )
}

export default GoalList
