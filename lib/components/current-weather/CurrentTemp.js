import React from 'react';
import HighLow from './HighLow';

const CurrentTemp = ({ weather }) => {
  const hourly = weather[0].hourly_forecast[0];

  return (
    <div className='temp-wrap'>
      <img className='icon' src={hourly.icon_url} alt='weather icon' />
      <h1 className='temperature'>
      {hourly.temp.english}°
      </h1>
      <HighLow weather={weather}/>
    </div>
  );
};

export default CurrentTemp;
