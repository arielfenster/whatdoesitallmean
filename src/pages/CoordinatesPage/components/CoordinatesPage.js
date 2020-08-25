import React, { useState } from 'react';
import MapComponent from './MapComponent';
// import { COORDINATES } from '../../../resources';

const CoordinatesPage = (props) => {
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

  return (
    <div style={{height: '100%', width: '100%' }}>
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
      <button onClick={handleClick}> Final stage! </button>
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
