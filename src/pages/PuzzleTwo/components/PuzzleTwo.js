import React from 'react';
import { Link } from 'react-router-dom';

const PuzzleTwo = (props) => {
  return (
    <div>
      <h1> PuzzleTwo </h1>
      <Link to='/three'> <button> Three </button></Link>
    </div>
  );
}

export default PuzzleTwo;
