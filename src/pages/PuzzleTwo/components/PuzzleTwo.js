import React, { useState } from 'react';
import WrapperComponent from '../../../components/WrapperComponent';
import { PUZZLE_TWO_SOLUTION } from '../../../resources';
import img from '../../../images/puzzleTwo.png';
import '../css/PuzzleTwo.css';

const PuzzleTwo = ({ handleChange, nextStep, isDisabled }) => {
  const [isHintClicked, setIsHintClicked] = useState(false);

  const handleClick = () => {
    setIsHintClicked(!isHintClicked);
  }

  return (
    <div className='div-puzzle-two'>
      <h1> Puzzle Two: </h1>
      <img src={img} alt='https://www.youtube.com/watch?v=DCnvuyK6ur8' />
      <input type='text' onChange={handleChange(PUZZLE_TWO_SOLUTION)} />
      <button onClick={handleClick}> Hint </button>
      {
        isHintClicked && <p> Shift every character by 3 </p>
      }
      <button onClick={nextStep} disabled={isDisabled}> Next stage </button>
    </div>
  );
}

export default WrapperComponent(PuzzleTwo);
