import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <footer className="w-100 mt-auto bg-secondary ">
      <div className="container text-center mb-auto">
        {location.pathname !== '/' && (
          <button className=" btn-dark mb-auto" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h6>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Rehab Goals Team.
        </h6>
      </div>
    </footer>
  )
}

export default Footer
