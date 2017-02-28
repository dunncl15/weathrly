import { expect } from 'chai';
import React from 'react';
import Main from '../lib/components/Main';
import Weather from '../lib/components/Weathrly';
import CurrentWeather from '../lib/components/CurrentWeather';
import Daily from '../lib/components/Daily';
import Hourly from '../lib/components/Hourly';
import { shallow, mount, render } from 'enzyme';
// const Data = require('./forecast10.json');
import $ui from 'jquery-ui';
import sinon from 'sinon';
import Welcome from '../lib/components/Welcome';
import NotFound from '../lib/components/Error';

const Data = require('./forecast10.json');

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

  it('should render Error when location is invalid', () => {
    const wrapper = shallow(<Weather/>);
    const searchInput = wrapper.find('.search');
    expect(wrapper.setState({ location: 'asdf' }));
    expect(wrapper.find(NotFound)).to.have.length(1);
  });

  it.skip('', () => {
    const wrapper = shallow(<Weather weather={ Data }/>);
  });
  it.skip('', () => {
    const wrapper = shallow(<Weather weather={ Data }/>);
  });
  it.skip('', () => {
    const wrapper = shallow(<Weather weather={ Data }/>);
  });
  it.skip('', () => {
    // const currentProps = wrapper.find('weather').props()
    const wrapper = shallow(<Daily weather={ Data }/>);
    // expect(currentProps).to.have.property('city', 'Parker')
  });
});

describe('CurrentWeather', () => {

  it('should use object to fill in current weather', () => {
    // const wrapper = shallow(<Weather weather={ Data }/>);
    // console.log(wrapper.prop().weather);
  });
});
