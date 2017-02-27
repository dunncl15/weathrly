import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import NotFound from './Error';
// import Multiple from './Error';
import Hourly from './Hourly';
import Daily from './Daily';
import Welcome from './Welcome';
import $ from 'jquery';
import $ui from 'jquery-ui';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
      autocomplete: [],
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
  }

  handleInput(e) {
    this.setState({
      location: e.target.value,
    });
    const userInput = this.state.location;
    $.getJSON(`http://autocomplete.wunderground.com/aq?cb=?&query=${userInput}`).then((data) => {
      this.state.autocomplete = [];
      data.RESULTS.forEach(location => {
        this.state.autocomplete.push(location.name);
      });
    });
    this.autocomplete();
  }

  autocomplete() {
    $('.search').autocomplete({
      minLength: 3,
      source: this.state.autocomplete,
      select: (event, ui) => {
        this.setState({ location: ui.item.label });
      },
      appendTo: '.nav',
    });
  }

  render() {
    let current;
    let daily;
    let hourly;
    let welcome;
    let error;
    let error2;

    if (this.state.error) {
      error = <NotFound error={this.state.error}/>;
      localStorage.clear();
    } else if (this.state.weather.length) {
      current = <CurrentWeather weather={this.state.weather}/>;
      daily = <Daily weather={this.state.weather}/>;
      hourly = <Hourly weather={this.state.weather}/>;
    } else {
      welcome = <Welcome weather={this.state.weather}/>;
    }

    return (
      <div>
        <div className="nav">
          <fieldset>
            <input
                tabIndex="0"
                type="text"
                className="search"
                placeholder="Enter City, State or Zipcode"
                value={this.state.location}
                aria-label="Input-Field"
                onChange={(e) => this.setState({
                  location: e.target.value,
                })} autoFocus/>
              <input type="submit" tabIndex="0" className="go" value="Go"
                     aria-label="Submit"
                     onClick={() => this.handleSubmit()}/>
                onChange={(e) => this.handleInput(e)} autoFocus/>
          </fieldset>
        </div>
        { error2 }
        { error }
        { welcome }
        { current }
        { hourly }
        { daily }
      </div>
    );
  }
}
