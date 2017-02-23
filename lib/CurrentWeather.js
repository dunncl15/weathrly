import React from 'react';

const CurrentWeather = ({ weather }) => {
  let today;

  if (weather.length) {
    today = weather[0].forecast.simpleforecast.forecastday[0];
  } else {
    return (
      <div>
        <h3>Please add a location.</h3>
      </div>
    );
  }

  return (
    <article className='weather-card'>
      <h2 className='location'>
        {weather[0].current_observation.display_location.full}
      </h2>

      <div className='temp-wrap'>
        <img className='icon' src={weather[0].hourly_forecast[0].icon_url} alt='weather icon' />

        <h1 className='temperature'>
          {weather[0].hourly_forecast[0].temp.english}°
        </h1>

        <div className='temp-range'>

          <p className='high'>
            {today.high.fahrenheit}°
            <img className='arrow arrow-high' src='lib/images/arrow.svg'/>
          </p>

          <p className='low'>
            {weather[0].forecast.simpleforecast.forecastday[0].low.fahrenheit}°
            <img className='arrow arrow-low' src='lib/images/arrow.svg'/>
          </p>

        </div>
      </div>

      <p className='date'>
        {weather[0].forecast.simpleforecast.forecastday[0].date.monthname}
      </p>

      <p className='summary'>
        {weather[0].forecast.txt_forecast.forecastday[0].fcttext}
      </p>

    </article>
  );
};

export default CurrentWeather;
