import React from 'react';
import WrapperComponent from '../../../components/WrapperComponent';
import PuzzleFooter from '../../../components/PuzzleFooter';
import { PUZZLE_THREE_SOLUTION } from '../../../resources';

import '../css/PuzzleThree.css';

const PuzzleThree = ({ handleChange, nextStep, isDisabled }) => {
  return (
    <div className='div-puzzle-three'>
      <h1> Puzzle Three </h1>
      <h3> I told you I will find that video :) </h3>
      <p>
        Go to the link you found.
        Search the comments for the answer and enter it exactly as written there.
      </p>
      <PuzzleFooter 
        onClick={nextStep}
        isDisabled={isDisabled}
        onChange={handleChange(PUZZLE_THREE_SOLUTION)}
        HintComponent={() => <p> Sort the comments by date </p>}
      />
    </div>
  );
}

export default WrapperComponent(PuzzleThree);
