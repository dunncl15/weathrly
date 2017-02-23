import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import $ from 'jquery';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
    };
  }

  setLocalStorage(id, data) {
    const stringData = JSON.stringify(data);
    localStorage.setItem(id, stringData);
  }

  handleSubmit() {
    $.get(`http://api.wunderground.com/api/9ec6c89aeda26602/forecast10day/conditions/hourly/q/${this.state.location}.json`).then((data) => {
      this.state.weather.unshift(data);
      this.setState({
        id: Date.now(),
        location: '',
        weather: this.state.weather,
      });
      this.setLocalStorage(this.state.id, this.state.weather);
    });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <fieldset>
            <input
                type='text'
                className='search'
                placeholder='Enter City, State or Zipcode'
                value={this.state.location}
                onChange={(e) => this.setState({
                  location: e.target.value,
                })} />

            <input type='submit' className='go' value='Go' onClick={() => this.handleSubmit()}/>
          </fieldset>
        </div>
        <CurrentWeather weather={this.state.weather}/>
      </div>
    );
  }
}
