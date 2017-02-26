import React from 'react';

const Summary = ({ weather }) => {
  const today = weather[0].forecast.simpleforecast.forecastday[0];

  return (
    <div>
      <p className='date'>
        {today.date.monthname} {today.date.day}
      </p>
      <p className='summary'>
        {weather[0].forecast.txt_forecast.forecastday[0].fcttext}
      </p>
    </div>
  );
};

export default Summary;
