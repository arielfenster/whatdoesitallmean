import React, { useState, useEffect } from 'react';
import WrapperComponent from '../../../components/WrapperComponent';
import { PUZZLE_ONE_SOLUTION } from '../../../solutions';

const PuzzleOne = (props) => {
  const { handleChange, nextStep, isDisabled } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 10000);
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <h1> Puzzle one </h1> 
      <p style={{
        whiteSpace: 'pre-line'
      }}>
        We will start slow with a relatively easy puzzle.
        As I have been told, you have some experience in looking in other people's git repositories.
        So why not put it to the test:
        Search through all of the README.md files in ALL of GitHub to find the answer to this puzzle.
        The answer will be in the form of:
        <br></br>
        {`puzzle-one: <answer>`}
      </p>
      {
        isVisible && <button onClick={handleClick}> Click for hint </button>
      }
      {
        isClicked && <p> The username of the GitHub's profile you want to search in starts with the word 'ariel' </p>
      }
      <input type='text' onChange={handleChange(PUZZLE_ONE_SOLUTION)} />
      <button onClick={nextStep} disabled={isDisabled}> Next stage </button>
    </div>
  );
}

export default WrapperComponent(PuzzleOne);
