import React from 'react';
import WrapperComponent from '../../../components/WrapperComponent';
import PuzzleFooter from '../../../components/PuzzleFooter';
import { PUZZLE_TWO_SOLUTION } from '../../../resources';
import img from '../../../images/puzzleTwo.png';

import '../css/PuzzleTwo.css';

const PuzzleTwo = ({ handleChange, nextStep, isDisabled }) => {

  return (
    <div className='div-puzzle-two'>
      <h1> Puzzle Two: </h1>
      <img src={img} alt='https://www.youtube.com/watch?v=DCnvuyK6ur8' />      
      <PuzzleFooter 
        onChange={handleChange(PUZZLE_TWO_SOLUTION)}
        onClick={nextStep}
        isDisabled={isDisabled}
        HintComponent={() => <p> Shift every character by 3 </p>}
      />
    </div>
  );
}

export default WrapperComponent(PuzzleTwo);
