import React from 'react';

const HighLow = ({ weather }) => {
  const today = weather[0].forecast.simpleforecast.forecastday[0];

  return (
      <div className="temps">
       <p className="high"><img className='arrow arrow-high' src='lib/images/arrow-high.svg' alt='temp high icon'/> {today.high.fahrenheit}°</p>
       <p className="low"><img className='arrow arrow-low' src='lib/images/arrow-low.svg' alt='temp low icon'/> {today.low.fahrenheit}°
       </p>
      </div>
  );
};

export default HighLow;
