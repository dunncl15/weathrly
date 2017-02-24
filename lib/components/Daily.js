import React from 'react';

const Daily = ({ weather }) => {
  const daily = weather[0].forecast.simpleforecast.forecastday;

  return (
    <section className='extended-forecast'>
      <h3 className='title'>10 Day Forecast</h3>
      <div className='daily-forecast'>
        <div className='day'>
          <p>{daily[1].date.weekday_short}</p>
          <img className='icon-small' src={daily[1].icon_url}/>
          <p className='range'>{daily[1].high.fahrenheit}° | {daily[1].low.fahrenheit}°</p>
        </div>
        <div className='day'>
          <p>{daily[2].date.weekday_short}</p>
          <img className='icon-small' src={daily[2].icon_url}/>
          <p>{daily[2].high.fahrenheit}° | {daily[2].low.fahrenheit}°</p>
        </div>
        <div className='day'>
          <p>{daily[3].date.weekday_short}</p>
          <img className='icon-small' src={daily[3].icon_url}/>
          <p>{daily[3].high.fahrenheit}° | {daily[3].low.fahrenheit}°</p>
        </div>
        <div className='day'>
          <p>{daily[4].date.weekday_short}</p>
          <img className='icon-small' src={daily[4].icon_url}/>
          <p>{daily[4].high.fahrenheit}° | {daily[4].low.fahrenheit}°</p>
        </div>
        <div className='day'>
          <p>{daily[5].date.weekday_short}</p>
          <img className='icon-small' src={daily[5].icon_url}/>
          <p>{daily[5].high.fahrenheit}° | {daily[5].low.fahrenheit}°</p>
        </div>
        <div className='day'>
          <p>{daily[6].date.weekday_short}</p>
          <img className='icon-small' src={daily[6].icon_url}/>
          <p>{daily[6].high.fahrenheit}° | {daily[6].low.fahrenheit}°</p>
        </div>
        <div className='day'>
          <p>{daily[7].date.weekday_short}</p>
          <img className='icon-small' src={daily[7].icon_url}/>
          <p>{daily[7].high.fahrenheit}° | {daily[7].low.fahrenheit}°</p>
        </div>
        <div className='day'>
          <p>{daily[8].date.weekday_short}</p>
          <img className='icon-small' src={daily[8].icon_url}/>
          <p>{daily[8].high.fahrenheit}° | {daily[8].low.fahrenheit}°</p>
        </div>
        <div className='day'>
          <p>{daily[9].date.weekday_short}</p>
          <img className='icon-small' src={daily[9].icon_url}/>
          <p>{daily[9].high.fahrenheit}° | {daily[9].low.fahrenheit}°</p>
        </div>
      </div>
    </section>
  );
};

export default Daily;
