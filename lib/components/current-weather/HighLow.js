import React from 'react';

const HighLow = ({ weather }) => {
  const today = weather[0].forecast.simpleforecast.forecastday[0];

  return (
    <div className='temp-range'>
      <div className="temps">
       <p>{today.high.fahrenheit}°</p>
       <p>{today.low.fahrenheit}°</p>
      </div>
      <div className="symbols">
        <img className='arrow arrow-high' src='lib/images/arrow-high.svg'/>
        <img className='arrow arrow-low' src='lib/images/arrow-low.svg'/>
      </div>
    </div>
  );
};

export default HighLow;
