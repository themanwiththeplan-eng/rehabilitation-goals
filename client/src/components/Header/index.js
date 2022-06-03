import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../utils/auth'

const Header = () => {
  const logout = (event) => {
    event.preventDefault()
    Auth.logout()
  }

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Rehabilitation Goals</h1>
        </Link>
        <p className="m-0">
          <em>Let's help people get better!</em>
        </p>
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">
                <strong>Login</strong>
              </Link>
              <Link to="/signup">
                <strong>Register</strong>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
