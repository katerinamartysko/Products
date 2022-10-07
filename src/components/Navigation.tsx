import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navigation">
      <span className="react"> React 2022</span>

      <span className="span">
        <Link to="/" className="linkProduct"> Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
};

export default Navigation;
