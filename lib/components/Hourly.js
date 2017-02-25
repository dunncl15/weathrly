import React from 'react';

const Hourly = ({ weather }) => {
  const hourly = weather[0].hourly_forecast;
  const nextSeven = hourly.filter((hour, i) => {
    return i < 7;
  });
  return (
    <ul>
      {nextSeven.map((hour, i) => {
        return (
          <li key={i}>
          {hour.FCTTIME.civil}
          <img src={hour.icon_url}/>
          {hour.temp.english}°
          </li>
        );
      })}
    </ul>
  );
};

export default Hourly;
