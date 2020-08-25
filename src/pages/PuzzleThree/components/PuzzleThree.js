import React, { useState } from 'react';
import WrapperComponent from '../../../components/WrapperComponent';
import { PUZZLE_THREE_SOLUTION } from '../../../resources';

const PuzzleThree = ({ handleChange, nextStep, isDisabled }) => {
  const [isHintClicked, setIsHintClicked] = useState(false);

  const handleClick = () => {
    setIsHintClicked(!isHintClicked);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <h1> Puzzle Three </h1>
      <h3> I told you I will find that video :) </h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <p> Search the comments for the answer. </p>
        <input size='110' type='text' onChange={handleChange(PUZZLE_THREE_SOLUTION)} />
        <button onClick={handleClick}> Hint </button>
        {
          isHintClicked && <p> Sort the comments by date </p>
        }

        <button onClick={nextStep} disabled={isDisabled}> Next stage </button>
      </div>
    </div>
  );
}

export default WrapperComponent(PuzzleThree);
