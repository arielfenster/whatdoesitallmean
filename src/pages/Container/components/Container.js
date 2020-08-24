import React, { useState } from 'react';
import StartPage from '../../StartPage/components/StartPage';
import PuzzleOne from '../../PuzzleOne/components/PuzzleOne';
import PuzzleTwo from '../../PuzzleTwo/components/PuzzleTwo';
import PuzzleThree from '../../PuzzleThree/components/PuzzleThree';
import CoordinatesPage from '../../CoordinatesPage/components/CoordinatesPage';

import '../css/Container.css'

const Container = (props) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  }

  let Component;
  switch (step) {
    case 0: {Component = StartPage; break;}
    case 1: {Component = PuzzleOne; break;}
    case 2: {Component = PuzzleTwo; break;}
    case 3: {Component = PuzzleThree; break;}
    case 4: {Component = CoordinatesPage; break;}
    default: Component = null;
  }

  return (
      <div className='wrapper'>
        <h1> What does it all mean? </h1>
        <div className='container'>
          <Component nextStep={nextStep} />
        </div>
      </div>
  );
}

export default Container;
