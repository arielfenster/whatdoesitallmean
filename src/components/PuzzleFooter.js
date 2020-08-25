import React, { useState } from 'react';
import NextStep from './ButtonNextStep';
import Hint from './ButtonHint';

const PuzzleFooter = ({ onClick, isDisabled, onChange, HintComponent, hintMsg }) => {
  const [isHintClicked, setHintClicked] = useState(false);

  const handleClick = () => {
    setHintClicked(!isHintClicked);
  };

  return (
    <div className='div-footer'>
        <div className='div-hint'>
          {
            isHintClicked && <HintComponent> {hintMsg} </HintComponent>
          }
        </div>
        <div className='div-submit'>
          <Hint onClick={handleClick}> Hint </Hint>
          <input type='text' style={{flex: 1}} onChange={onChange} />
          <NextStep onClick={onClick} disabled={isDisabled}> Next </NextStep>
        </div>
      </div>
  );
};

export default PuzzleFooter;
