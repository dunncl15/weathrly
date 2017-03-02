import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import NotFound from './Error';
import Hourly from './Hourly';
import Daily from './Daily';
import Welcome from './Welcome';
import $ui from 'jquery-ui';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
      autocomplete: [],
      disabled: true,
    };
  }

  componentDidMount() {
    if (localStorage.getItem('location')) {
      const value = localStorage.getItem('location');
      this.apiCall(value);
    }
  }

  apiCall(value) {
    $.get(`https://api.wunderground.com/api/1443dd5d9e0f4a45/forecast10day/conditions/hourly/q/${value}.json`).then((data) => {
      if (data.forecast === undefined) {
        this.setState({
          location: '',
          weather: [data],
          error: data.response.error.description,
        });
      } else {
        this.setState({
          location: '',
          weather: [data],
          error: '',
        });
      }
    });
  }

  handleSubmit() {
    localStorage.setItem('location', this.state.location);
    this.apiCall(localStorage.getItem('location'));
    this.setState({
      disabled: true,
    });
  }

  handleInput(e) {
    this.setState({
      location: e.target.value,
      disabled: false,
    });

    const userInput = this.state.location;
    const root = 'https://autocomplete.wunderground.com/aq?cb=?&query=';

    $.getJSON(root + userInput).then((data) => {
      this.state.autocomplete = [];

      data.RESULTS.forEach(location => {
        this.state.autocomplete.push(location.name);
        this.autocomplete();
      });
    });
  }

  autocomplete() {
    $('.search').autocomplete({
      minLength: 3,
      source: this.state.autocomplete,
      select: (event, ui) => {
        this.setState({ location: ui.item.label });
      },
      appendTo: 'fieldset',
    });
  }

  render() {
    let current;
    let daily;
    let welcome;
    let error;

    if (this.state.error) {
      error = <NotFound error={this.state.error}/>;
      localStorage.clear();
    } else if (this.state.weather.length) {
      current = <CurrentWeather weather={this.state.weather}/>;
      daily = <Daily weather={this.state.weather}/>;
    } else {
      welcome = <Welcome weather={this.state.weather}/>;
    }

    return (
      <div>
        <header className="nav">
          <h1 className="app-name"><img src="lib/images/logo.png" alt="logo image"/>Weathrly</h1>
          <fieldset>
            <input
                type="text"
                className="search"
                placeholder="Enter City, State or Zipcode"
                value={this.state.location}
                aria-label="Input"
                onChange={(e) => this.handleInput(e)} autoFocus/>
            <input type="submit"
                   disabled={this.state.disabled}
                   className="go"
                   value="Go"
                   aria-label="Search"
                   onClick={() => this.handleSubmit()}/>
          </fieldset>
        </header>
        { error }
        { welcome }
        { current }
        { daily }
      </div>
    );
  }
}
