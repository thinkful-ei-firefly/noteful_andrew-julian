import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <header className="App-header">
            <Link to="/">
            <h1>
              Noteful
            </h1>
            </Link>
      </header>
    </div>
  );
}

export default Header;
