import React, { Component } from 'react';
import $ from 'jquery';
// import Search from './Search';
// import Welcome from './Welcome';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
    };
  }
  handleSubmit() {
    $.get(`http://api.wunderground.com/api/1443dd5d9e0f4a45/forecast/q/${this.state.location}.json`).then((data) => {
      this.state.weather.push(data);
      this.setState({ weather: this.state.weather });
    });
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.location}
               onChange={(e) => this.setState({ city: e.target.value })} />
        <input type='submit' onClick={() => this.handleSubmit()}/>
        <section>
          
        </section>
      </div>
    );
  }
}
