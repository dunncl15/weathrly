import React from 'react';
import HighLow from './HighLow';

const CurrentTemp = ({ weather }) => {
  const hourly = weather[0].hourly_forecast[0];

  return (
    <div className='temp-wrap'>
      <div className="main-temp">
        <img className='icon-current' src={hourly.icon_url} alt='weather icon' />
        <h1 className='temperature'>
        {hourly.temp.english}°F
        </h1>
      </div>
      <p className="condition">{hourly.condition}</p>
      <HighLow weather={weather}/>
    </div>
  );
};

export default CurrentTemp;
