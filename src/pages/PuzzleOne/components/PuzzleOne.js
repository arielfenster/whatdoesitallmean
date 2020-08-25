import React from 'react';
import WrapperComponent from '../../../components/WrapperComponent';
import PuzzleFooter from '../../../components/PuzzleFooter';
import img from '../../../images/hintOne.png';
import { PUZZLE_ONE_SOLUTION } from '../../../resources';

import '../css/PuzzleOne.css';

const PuzzleOne = ({ handleChange, nextStep, isDisabled }) => {
  return (
    <div className="div-puzzle-one">
      <h1> Puzzle one </h1> 
      <h3 id='description'>
        We will start slow with a relatively easy puzzle.
        <br></br>
        As I have been told, you have some experience in looking in other people's git repositories,
        so why not put it to the test:
        <br></br>
        Search through all of the README.md files in ALL of GitHub to find the answer to this puzzle.
        <br></br>
        The answer will be in the form of:
        <br></br>
        {`puzzle-one: <answer>`}
      </h3>
      <PuzzleFooter 
        onChange={handleChange(PUZZLE_ONE_SOLUTION)}
        onClick={nextStep}
        isDisabled={isDisabled}
        HintComponent={() => <img src={img} alt='Search my profile - arielfenster' />}
      />
    </div>
  );
}

export default WrapperComponent(PuzzleOne);
