import React from 'react';
import WrapperComponent from '../../../components/WrapperComponent';
import { PUZZLE_THREE_SOLUTION } from '../../../resources';

const PuzzleThree = ({ handleChange, nextStep, isDisabled }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <h1> PuzzleThree </h1>
      <h3> I told you I would find that video :) </h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <p> Search the comments for the answer. </p>
        <input size='110' type='text' onChange={handleChange(PUZZLE_THREE_SOLUTION)} />
        <button onClick={nextStep} disabled={isDisabled}> Next stage </button>
      </div>
    </div>
  );
}

export default WrapperComponent(PuzzleThree);
