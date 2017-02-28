import React from 'react';
import CurrentTemp from './current-weather/CurrentTemp';
import Summary from './current-weather/summary';
import Hourly from './Hourly';

const CurrentWeather = ({ weather }) => {
  const today = weather[0].hourly_forecast[0].FCTTIME;
  return (
    <section className="main-content">
      <section className='weather-card'>
        <h2 className='location'>
          {weather[0].current_observation.display_location.full}
        </h2>
        <div className="date-time">
          <p>{today.weekday_name}</p>
          <p>{today.mon_abbrev} {today.mday}</p>
        </div>
        <CurrentTemp weather={weather} />
        <Summary weather={weather} />
      </section>
        <Hourly weather={weather}/>
    </section>
  );
};

export default CurrentWeather;
