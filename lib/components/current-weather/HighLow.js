import React from 'react';

const HighLow = ({ weather }) => {
  const today = weather[0].forecast.simpleforecast.forecastday[0];

  return (
    <div className='temp-range'>
      <p className='high'>
        {today.high.fahrenheit}°
        <img className='arrow arrow-high' src='lib/images/arrow-high.svg'/>
      </p>
      <p className='low'>
        {today.low.fahrenheit}°
        <img className='arrow arrow-low' src='lib/images/arrow-low.svg'/>
      </p>
    </div>
  );
};

export default HighLow;
