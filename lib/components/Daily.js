import React from 'react';

const Daily = ({ weather }) => {
  const daily = weather[0].forecast.simpleforecast.forecastday;
  const nextTen = daily.filter((day, i) => {
    return i > 0;
  });
  return (
    <section className='extended-forecast'>
      <h4 className='title'>10 Day Forecast</h4>
      <div className='daily-forecast'>
    {nextTen.map((day, i) => {
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
