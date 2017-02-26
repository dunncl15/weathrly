import React from 'react';
import CurrentTemp from './current-weather/CurrentTemp';
import Summary from './current-weather/Summary';

const CurrentWeather = ({ weather }) => {
  return (
    <section className='weather-card'>
      <h2 className='location'>
        {weather[0].current_observation.display_location.full}
      </h2>
      <CurrentTemp weather={weather} />
      <Summary weather={weather} />
    </section>
  );
};

export default CurrentWeather;
