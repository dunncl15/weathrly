import React from 'react';

const CurrentWeather = ({ weather }) => {
  if (!weather.length) {
    return (
      <h3>Please add a location.</h3>
    );
  }

  return (
    <section>
      <h2 className='location'>{weather[0].current_observation.display_location.full}</h2>
      <p className='date'>{weather[0].forecast.simpleforecast.forecastday[0].date.pretty}</p>
      <p className='conditions'> {weather[0].hourly_forecast[0].condition}</p>
      <img src={weather[0].hourly_forecast[0].icon_url} alt='weather icon' />
      <h1 className='temperature'>{weather[0].hourly_forecast[0].temp.english}</h1>
      <p className='high'>{weather[0].forecast.simpleforecast.forecastday[0].high.fahrenheit}</p>
      <p className='low'>{weather[0].forecast.simpleforecast.forecastday[0].low.fahrenheit}</p>
      <p className='summary'>{weather[0].forecast.txt_forecast.forecastday[0].fcttext}</p>
    </section>
  );
};

export default CurrentWeather;
