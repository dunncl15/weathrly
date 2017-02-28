import { expect } from 'chai';
import React from 'react';
import Main from '../lib/components/Main';
import Weather from '../lib/components/Weathrly';
import CurrentWeather from '../lib/components/CurrentWeather';
import CurrentTemp from '../lib/components/current-weather/CurrentTemp';
import HighLow from '../lib/components/current-weather/HighLow';
import Summary from '../lib/components/current-weather/summary';
import Daily from '../lib/components/Daily';
import Hourly from '../lib/components/Hourly';
import Welcome from '../lib/components/Welcome';
import NotFound from '../lib/components/Error';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
const Data = require('./forecast10.json');
import $ui from 'jquery-ui';

describe('Main', () => {
  it('should have a component called Weather', () => {
    const wrapper = shallow(<Main/>);
    expect(wrapper.find('Weather')).to.have.length(1);
  });
});

describe('Weather', () => {
  it('should have two state properties by default', () => {
    const wrapper = shallow(<Weather/>);
    const weatherState = wrapper.state();
    expect(weatherState.location).to.equal('');
    expect(weatherState.weather).to.deep.equal([]);
  });

  it('should have an input field and submit button', () => {
    const wrapper = shallow(<Weather/>);
    const weatherState = wrapper.state();
    const searchInput = wrapper.find('.search');
    const inputField = wrapper.find('.go');
    expect(wrapper.find('.search')).to.have.length(1);
    expect(wrapper.find('.go')).to.have.length(1);
  });

  it('search field should take location and update state', () => {
    const wrapper = shallow(<Weather/>);
    const searchInput = wrapper.find('.search');
    expect(wrapper.state().location).to.equal('');
    searchInput.simulate('change', { target: { value: 'charlieville' } });
    expect(wrapper.state().location).to.equal('charlieville');
  });

  it('should be able to change location', () => {
    const wrapper = shallow(<Weather/>);
    const searchInput = wrapper.find('.search');
    expect(wrapper.state().location).to.equal('');
    searchInput.simulate('change', { target: { value: 'charlieville' } });
    expect(wrapper.state().location).to.equal('charlieville');
    searchInput.simulate('change', { target: { value: 'boston, ma' } });
    expect(wrapper.state().location).to.equal('boston, ma');
  });

  it('simulates submit button click event', () => {
    const wrapper = shallow(<Weather/>);
    const obj = wrapper.instance();
    sinon.spy(obj, 'handleSubmit');
    const submitButton = wrapper.find('.go');
    submitButton.simulate('click');
    expect(obj.handleSubmit.callCount).to.equal(1);
  });

  it('Should start with welcome page', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper.find(Welcome)).to.have.length(1);
  });

  it('Renders temps to page when weather has an object', () => {
    const wrapper = shallow(<Weather/>);
    const weather = [Data];
    wrapper.setState({ weather: weather });
    const current = <CurrentWeather/>;
    expect(wrapper.find(CurrentWeather)).to.have.length(1);
    expect(wrapper.find(Hourly)).to.have.length(1);
    expect(wrapper.find(Daily)).to.have.length(1);
  });
});

describe('CurrentWeather', () => {
  it('Renders temps to page when weather has an object', () => {
    const wrapper = shallow(<Weather/>);
    const weather = [Data];
    wrapper.setState({ weather: weather });
    const current = <CurrentWeather/>;
    expect(wrapper.find(CurrentWeather)).to.have.length(1);
    expect(wrapper.find(Hourly)).to.have.length(1);
    expect(wrapper.find(Daily)).to.have.length(1);
  });

  it('CurrentWeather should display current location', () => {
    const weather = [Data];
    const wrapper = shallow(<CurrentWeather weather={ weather }/>);
    const location = wrapper.find('.location');
    expect(location.text()).to.equal('Parker, CO');
  });

  it('CurrentTemp should display current temperature', () => {
    const weather = [Data];
    const wrapper = shallow(<CurrentTemp weather={ weather }/>);
    const temp = wrapper.find('.temperature');
    expect(temp.text()).to.equal('48°');
  });

  it('Should display the projected high and low temperatures', () => {
    const weather = [Data];
    const wrapper = shallow(<HighLow weather={ weather }/>);
    const temps = wrapper.find('.temps');
    expect(temps.text()).to.equal('51°25°');
  });

  it('Should display the projected high and low temperatures', () => {
    const weather = [Data];
    const wrapper = shallow(<HighLow weather={ weather }/>);
    const temps = wrapper.find('.temps');
    expect(temps.text()).to.equal('51°25°');
  });

  it('Should display the forecast summary for the day', () => {
    const weather = [Data];
    const wrapper = shallow(<Summary weather={ weather }/>);
    const summary = wrapper.find('.summary');
    expect(summary.text()).to.equal(
      'Windy with a mix of clouds and sun. High 51F. Winds SW at 20 to 30 mph.');
  });
});
