import React from 'react';
import NextStep from '../../../components/ButtonNextStep';

import '../css/StartPage.css';

const StartPage = (props) => {
  const { nextStep } = props;

  return (
    <div className="div-start">
      <h3 id='greeting'>
        Hey baby. 
        <br></br>  
        Welcome to my treasure hunt/escape room challenge. This is the first part of your birthday.
        <br></br>
        To unlock the second part of your birthday, yoy must complete these puzzles.
        <br></br>
        At each stage, you will be given a question and a hint (if desired).
        <br></br>
        You can continue to the next puzzle only when you have entered the correct answer.
        <br></br>
        <h3 style={{position: 'relative', top: '15%'}}>
          Are you up for it?
        </h3>
      </h3>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <NextStep onClick={nextStep}> Start </NextStep>
      </div>
    </div>
  );
}

export default StartPage;
