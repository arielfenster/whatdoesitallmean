import React from 'react';
import NextStep from '../../../components/ButtonNextStep';
import '../css/StartPage.css';

const StartPage = (props) => {
  const { nextStep } = props;

  return (
    <div className="div-start">
      <p id='greeting'>
        Hey baby. 
        
        TO UNLOCK THE SECOND PART OF YOUR BIRTHDAY, YOU MUST COMPLETE THIS CHALLENGE
        ARE YOU UP FOR IT?
        TO UNLOCK THE SECOND PART OF YOUR BIRTHDAY, YOU MUST COMPLETE THIS CHALLENGE
        ARE YOU UP FOR IT?
        TO UNLOCK THE SECOND PART OF YOUR BIRTHDAY, YOU MUST COMPLETE THIS CHALLENGE
        ARE YOU UP FOR IT?
        TO UNLOCK THE SECOND PART OF YOUR BIRTHDAY, YOU MUST COMPLETE THIS CHALLENGE
        ARE YOU UP FOR IT?
      </p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <NextStep onClick={nextStep}> Start </NextStep>
      </div>
    </div>
  );
}

export default StartPage;
