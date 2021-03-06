import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { API_KEY } from '../../../resources';

const libraries = ['places'];

const styles = {
  mapContainerStyle: {
    width: '100%',
    height: '100%',
  },
  divStyle: {
    width: '100%',
    height: '100%',
  }
}

const MapComponent = ({ coordinates }) => {
  const [markerPosition, setMarkerPosition] = useState({});

  return (
    <div style={styles.divStyle}>
      <LoadScript googleMapsApiKey={API_KEY} libraries={libraries} >
        <GoogleMap
          mapContainerStyle={styles.mapContainerStyle}
          zoom={12}
          center={{
            lat: parseFloat(coordinates.lat),
            lng: parseFloat(coordinates.lng)
          }}
          onLoad={(map) => setMarkerPosition({
            lat: map.center.lat(),
            lng: map.center.lng()
          })}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
