import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Hourly from './Hourly';
import Daily from './Daily';
import Welcome from './Welcome';
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

  apiCall(value) {
    $.get(`http://api.wunderground.com/api/1443dd5d9e0f4a45/forecast10day/conditions/hourly/q/${value}.json`).then((data) => {
      this.setState({
        location: '',
        weather: [data],
      });
    });
  }

  handleSubmit() {
    localStorage.setItem('location', this.state.location);
    this.apiCall(localStorage.getItem('location'));
  }

  render() {
    let current;
    let daily;
    let hourly;
    let welcome;
    if (this.state.weather.length) {
      current = <CurrentWeather weather={this.state.weather}/>;
      daily = <Daily weather={this.state.weather}/>;
      hourly = <Hourly weather={this.state.weather}/>;
    } else {
      welcome = <Welcome/>;
    }

    return (
      <div>
        <div className="nav">
          <fieldset>
            <input
                type="text"
                className="search"
                placeholder="Enter City, State or Zipcode"
                value={this.state.location}
                onChange={(e) => this.setState({
                  location: e.target.value,
                })} autoFocus/>
            <input type="submit" className="go" value="Go" onClick={() => this.handleSubmit()}/>
          </fieldset>
        </div>
        { welcome }
        { current }
        { hourly }
        { daily }
      </div>
    );
  }
}
