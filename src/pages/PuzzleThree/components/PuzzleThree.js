import React from 'react';
import { Link } from 'react-router-dom';

const PuzzleThree = (props) => {
  return (
    <div>
      <h1> PuzzleThree </h1>
      <Link to='/coordinates'> <button> Coordinates </button></Link>
    </div>
  );
}

export default PuzzleThree;
