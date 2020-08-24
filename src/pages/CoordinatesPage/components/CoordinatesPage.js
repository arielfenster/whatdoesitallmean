import React from 'react';
import { Link } from 'react-router-dom';

const CoordinatesPage = (props) => {
  return (
    <div>
      <h1> CoordinatesPage </h1>
      <Link to='/one'> <button> One </button></Link>
    </div>
  );
}

export default CoordinatesPage;
