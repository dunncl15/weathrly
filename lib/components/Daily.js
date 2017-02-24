import React from 'react';

const Daily = ({ weather }) => {
  const daily = weather[0].forecast.simpleforecast.forecastday;
  daily.shift();
  return (
    <section className='extended-forecast'>
      <h3 className='title'>10 Day Forecast</h3>
      <div className='daily-forecast'>
    {daily.map((day, i) => {
      return (
       <div className='day' key={i}>
         <p>{day.date.weekday_short}</p>
         <img className='icon-small' src={day.icon_url}/>
         <p className='range'>{day.high.fahrenheit}° | {day.low.fahrenheit}°</p>
       </div>
      );
    })}
      </div>
    </section>
  );
};

export default Daily;
