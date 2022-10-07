import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const AboutPage = () => {
  return (
    <div className="root">
      <h1 className="title">You have moved to a non-existent page</h1>
      <Link to="/" className="about"> back to main page </Link>
    </div>
  );
};

export default AboutPage;
