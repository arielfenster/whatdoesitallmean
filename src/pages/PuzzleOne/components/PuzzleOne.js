import React from 'react';
import { Link } from 'react-router-dom';

const PuzzleOne = (props) => {
  return (
    <div>
      <h1> PuzzleOne </h1>
      <Link to='/two'> <button> Two </button></Link>
    </div>
  );
}

export default PuzzleOne;
