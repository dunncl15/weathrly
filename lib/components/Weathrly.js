import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Hourly from './Hourly';
import Daily from './Daily';
import $ from 'jquery';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('location')) {
      const value = localStorage.getItem('location');
      this.apiCall(value);
    }
  }

  setLocalStorage(key, data) {
    const stringData = JSON.stringify(data);
    localStorage.setItem(key, stringData);
  }

  getLocalStorage(key) {
    const recentData = JSON.parse(localStorage.getItem(key));
    this.setState({ weather: recentData[0], id: key });
    localStorage.clear();
  }

  apiCall(value) {
    $.get(`http://api.wunderground.com/api/9ec6c89aeda26602/forecast10day/conditions/hourly/q/${value}.json`).then((data) => {
      this.state.weather.unshift(data);
      this.setState({
        location: '',
        weather: this.state.weather,
      });
    });
  }

  handleSubmit() {
    $.get(`http://api.wunderground.com/api/9ec6c89aeda26602/forecast10day/conditions/hourly/q/${this.state.location}.json`).then((data) => {
      this.state.weather.unshift(data);
      this.setLocalStorage('location', this.state.location);
      this.setState({
        location: '',
        weather: this.state.weather,
      });
    });
  }

  render() {
    let hourly;
    let daily;

    if (this.state.weather.length) {
      hourly = <Hourly weather={this.state.weather}/>;
      daily = <Daily weather={this.state.weather}/>;
    }

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
        { hourly }
        { daily }
      </div>
    );
  }
}
