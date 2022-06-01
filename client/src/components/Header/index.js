
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-light" to="/">
          <h1 className="m-0">Rehabilitation Goals</h1>
        </Link>
        <p className="m-0">Let's help people get better!</p>
      </div>
    </header>
  );
};

export default Header;
