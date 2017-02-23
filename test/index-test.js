import { expect } from 'chai';
import React from 'react';
import Main from '../lib/components/Main';
import Weather from '../lib/components/Weathrly';
import CurrentWeather from '../lib/components/CurrentWeather';
import Daily from '../lib/components/Daily';
import Hourly from '../lib/components/Hourly';
import { shallow, mount, render } from 'enzyme';

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

  it('search field should take location and update state', () => {
    const wrapper = shallow(<Weather/>);
    const searchInput = wrapper.find('.search');
    expect(wrapper.state().location).to.equal('');
    searchInput.simulate('change', { target: { value: 'charlieville' } });
    expect(wrapper.state().location).to.equal('charlieville');
  });
});
