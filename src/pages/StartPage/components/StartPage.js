import React from 'react';

const StartPage = (props) => {
  const { nextStep } = props;

  return (
    <div>
      <p style={{fontSize: '20px'}}>
        TO UNLOCK THE SECOND PART OF YOUR BIRTHDAY, YOU MUST COMPLETE THIS CHALLENGE. <br></br>
        ARE YOU UP FOR IT?
      </p>
      <button onClick={nextStep}> Start </button>
    </div>
  );
}

export default StartPage;
