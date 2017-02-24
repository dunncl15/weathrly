import React from 'react';

const Daily = ({ weather }) => {
  const daily = weather[0].forecast.simpleforecast.forecastday;

  return (
    <div>
      <div>
        <p>{daily[1].date.month}/{daily[1].date.day}</p>
        <img src={daily[1].icon_url}/>
        <p>H{daily[1].high.fahrenheit} | L{daily[1].low.fahrenheit}</p>
      </div>
      <div>
        <p>{daily[2].date.month}/{daily[2].date.day}</p>
        <img src={daily[2].icon_url}/>
        <p>H{daily[2].high.fahrenheit} | L{daily[2].low.fahrenheit}</p>
      </div>
      <div>
        <p>{daily[3].date.month}/{daily[3].date.day}</p>
        <img src={daily[3].icon_url}/>
        <p>H{daily[3].high.fahrenheit} | L{daily[3].low.fahrenheit}</p>
      </div>
      <div>
        <p>{daily[4].date.month}/{daily[4].date.day}</p>
        <img src={daily[4].icon_url}/>
        <p>H{daily[4].high.fahrenheit} | L{daily[4].low.fahrenheit}</p>
      </div>
      <div>
        <p>{daily[5].date.month}/{daily[5].date.day}</p>
        <img src={daily[5].icon_url}/>
        <p>H{daily[5].high.fahrenheit} | L{daily[5].low.fahrenheit}</p>
      </div>
      <div>
        <p>{daily[6].date.month}/{daily[6].date.day}</p>
        <img src={daily[6].icon_url}/>
        <p>H{daily[6].high.fahrenheit} | L{daily[6].low.fahrenheit}</p>
      </div>
      <div>
        <p>{daily[7].date.month}/{daily[7].date.day}</p>
        <img src={daily[7].icon_url}/>
        <p>H{daily[7].high.fahrenheit} | L{daily[7].low.fahrenheit}</p>
      </div>
      <div>
        <p>{daily[8].date.month}/{daily[8].date.day}</p>
        <img src={daily[8].icon_url}/>
        <p>H{daily[8].high.fahrenheit} | L{daily[8].low.fahrenheit}</p>
      </div>
      <div>
        <p>{daily[9].date.month}/{daily[9].date.day}</p>
        <img src={daily[9].icon_url}/>
        <p>H{daily[9].high.fahrenheit} | L{daily[9].low.fahrenheit}</p>
      </div>
    </div>
  );
};

export default Daily;
