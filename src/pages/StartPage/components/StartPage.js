import React from 'react';
import { Link } from 'react-router-dom';

import '../css/StartPage.css';

const StartPage = (props) => {
  return (
      <div className="start">
        <h1> START PAGE </h1>
        <Link to='/one'> <button> One </button></Link>
      </div>
  );
}

export default StartPage;
