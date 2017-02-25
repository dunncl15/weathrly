import React from 'react';

const Hourly = ({ weather }) => {
  const hourly = weather[0].hourly_forecast;
  const nextSeven = hourly.filter((hour, i) => {
    return i < 7;
  });
  return (
    <section>
      <h4 className="title">Hourly Forecast</h4>
      <ul className="hourly-forecast">
        {nextSeven.map((hour, i) => {
          return (
            <li className="hour" key={i}>
            <div className="time">{hour.FCTTIME.civil}</div>
            <img className="icon-hour" src={hour.icon_url}/>
            {hour.temp.english}°
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Hourly;
