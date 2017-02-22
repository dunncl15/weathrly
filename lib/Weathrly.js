import React, { Component } from 'react';
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

  render() {
    return (
      <div>
        <input type='text' value={this.state.location}
               onChange={(e) => this.setState({ location: e.target.value })} />
        <input type='submit'/>
      </div>
    );
  }
}
