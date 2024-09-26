import React from 'react';

import Sunny from '../../assets/WeatherIcons/Sunny.gif';

import './MainTempDisplay.css';

// TODO: Make an icon library so I can import them in a useIcon hook and use a
// switch statement to render the appropriate icon.

const MainTempDisplay = () => {
  return (
    <div id='main-temp-container'>
      <div id='main-temp-conditions'>
        <div id='main-temperature'>
          <p>77</p>
          <p>
            <span id='main-degrees'>º</span>
          </p>
        </div>
        <p id='main-conditions'>Sunny</p>
      </div>
      <img src={Sunny} alt='' />
    </div>
  );
};

export default MainTempDisplay;