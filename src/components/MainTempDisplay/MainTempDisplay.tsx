import React, { memo } from 'react';
import { useIcon } from '../../hooks/useIcon';
import useConditionCode from '../../hooks/useConditionCode';
import useCapitalizeFirstLetter from '../../hooks/useCapitalizeFirstLetter';
import useDegreesToDirection from '../../hooks/useDegreesToDirection';

import './MainTempDisplay.css';

interface MainTempDisplayProps {
  temp: number;
  desc: number;
  iconCode: number;
  wind: number;
  windDirection: number;
}

const MainTempDisplay: React.FC<MainTempDisplayProps> = memo(({ temp, desc, iconCode, wind, windDirection }) => {
  return (
    <div id='main-temp-container'>
      <div id='main-temp-conditions'>
        <div id='main-temperature'>
          <p>{Math.ceil(temp)}</p>
          <span id='main-degrees'>º</span>
        </div>
        <p id='main-conditions'>{useCapitalizeFirstLetter(useConditionCode(desc))}</p>
        <div id='main-weather-icon'>{useIcon(iconCode, 'lg')}</div>
        <p id='main-weather-wind-speed'>
          Wind: {useDegreesToDirection(windDirection)} {wind}
        </p>
      </div>
    </div>
  );
});

export default React.memo(MainTempDisplay);
