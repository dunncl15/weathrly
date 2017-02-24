import React from 'react';
// import CurrentTemp from '../CurrentTemp.js';

const Hourly = ({ weather }) => {
  let hourly = weather[0].hourly_forecast;

  return (
    <ul>
      <li>
        {hourly[1].FCTTIME.civil}
        <img src={hourly[1].icon_url}/>
        {hourly[1].temp.english}°
      </li>
      <li>
        {hourly[2].FCTTIME.civil}
        <img src={hourly[2].icon_url}/>
        {hourly[2].temp.english}°
      </li>
      <li>
        {hourly[3].FCTTIME.civil}
        <img src={hourly[3].icon_url}/>
        {hourly[3].temp.english}°
      </li>
      <li>
        {hourly[4].FCTTIME.civil}
        <img src={hourly[4].icon_url}/>
        {hourly[4].temp.english}°
      </li>
      <li>
        {hourly[5].FCTTIME.civil}
        <img src={hourly[5].icon_url}/>
        {hourly[5].temp.english}°
      </li>
      <li>
        {hourly[6].FCTTIME.civil}
        <img src={hourly[6].icon_url}/>
        {hourly[6].temp.english}°
      </li>
      <li>
        {hourly[7].FCTTIME.civil}
        <img src={hourly[7].icon_url}/>
        {hourly[7].temp.english}°
      </li>
    </ul>
  );
};

export default Hourly;
