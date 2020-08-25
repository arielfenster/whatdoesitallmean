import React, { useState } from 'react';
import MapComponent from './MapComponent';
import NextStep from '../../../components/ButtonNextStep';

import '../css/CoordinatesPage.css';

const CoordinatesPage = ({ nextStep }) => {
  const [coordinates, setCoordinates] = useState({
    lat: '',
    lng: '',
  });
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (input) => (event) => {
    const { value } = event.target;
    setCoordinates(prev => ({
      ...prev,
      [input]: value,
    }));
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const className = isClicked ? 'div-hide' : 'div-inputs';

  return (
    <div className='div-coordinates'>
      <div className={className}>
          <h1> Coordinates Page </h1>
          <h3> Enter the coordinates you found </h3>
        <div>
            <label> First number </label>
            <input type='text' onChange={handleChange('lat')} />
        </div>
        <div>
            <label> Second number </label>
            <input type='text' onChange={handleChange('lng')} />
        </div>
      </div>
      <NextStep onClick={handleClick}> Finish! </NextStep>
      {
        isClicked && <MapComponent coordinates={coordinates} />
      }
      {
        isClicked && <h3> I'll meet you there... </h3>
      }
    </div>
  );
}

export default CoordinatesPage;
