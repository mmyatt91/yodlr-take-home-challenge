import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

// Homepage
// Routed @ '/'

function HomePage() {

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1 className="mb-4 font-weight=bold">Yodlr</h1>
        <p>
          <Link className="btn btn-primary font-weight-bold mr-3" to="/register">Register</Link>
          <Link className="btn btn-primary font-weight-bold mr-3" to="/admin">Admin</Link>
        </p>
      </div>
    </div>
  )
}

export default HomePage;