import React, { useState } from 'react';
import WrapperComponent from '../../../components/WrapperComponent';
import NextStep from '../../../components/ButtonNextStep';
import Hint from '../../../components/ButtonHint';
import img from '../../../images/hintOne.png';
import { PUZZLE_ONE_SOLUTION } from '../../../resources';
import '../css/PuzzleOne.css';

const PuzzleOne = ({ handleChange, nextStep, isDisabled }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

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
      <div className='div-footer'>
        <div className='div-hint' style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
          {
            isClicked && <img src={img} alt='Search my profile - arielfenster' />
          }
        </div>
        <div className='div-buttons'>
          <Hint onClick={handleClick}> Hint </Hint>
          <input type='text' style={{flex: 1}} onChange={handleChange(PUZZLE_ONE_SOLUTION)} />
          <NextStep onClick={nextStep} disabled={isDisabled}> Next </NextStep>
        </div>
      </div>
    </div>
  );
}

export default WrapperComponent(PuzzleOne);
