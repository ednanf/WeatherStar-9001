import BlowingSnow from '../../libraries/WeatherIcons/BlowingSnow';

import './MainTempDisplay.css';

// TODO: Make an icon library so I can import them in a useIcon hook and use a
// switch statement to render the appropriate icon.

// TODO: Fix weather icon size

// TODO: Fix weather condition text overflow

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
        <p id='main-conditions'>Snow</p>
      </div>
      <BlowingSnow />
    </div>
  );
};

export default MainTempDisplay;
