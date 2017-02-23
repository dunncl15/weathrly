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

  handleSubmit() {
    $.get(`http://api.wunderground.com/api/9ec6c89aeda26602/forecast10day/conditions/hourly/q/${this.state.location}.json`).then((data) => {
      this.state.weather.unshift(data);
      this.setState({ id: Date.now(), location: '', weather: this.state.weather });
    });
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.location}
               onChange={(e) => this.setState({ location: e.target.value })} />
        <input type='submit' onClick={() => this.handleSubmit()}/>
        <CurrentWeather weather={this.state.weather}/>
      </div>
    );
  }
}
