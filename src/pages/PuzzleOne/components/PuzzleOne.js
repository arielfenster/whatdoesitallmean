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
      <p>
        We will start slow with a relatively easy puzzle.
        As I have been told, you have some experience in looking in other people's git repositories.
        So why not put it to the test:
        Search through all of the README.md files in ALL of GitHub to find the answer to this puzzle.
        The answer will be in the form of:
        <br></br>
        {`puzzle-one: <answer>`}
      </p>
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
