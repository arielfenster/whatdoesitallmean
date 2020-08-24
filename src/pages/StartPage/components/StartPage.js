import React from 'react';

const StartPage = (props) => {
  const { nextStep } = props;

  return (
    <div>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer
        took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting
      </p>
      <button onClick={nextStep}> Start </button>
    </div>
  );
}

export default StartPage;
