import React from 'react';
import { shallow } from 'enzyme';
import WeatherIcon from 'react-icons-weather';
import ForecastSummary from '../../src/components/forecast-summary';

describe('forecast-summary component', () => {
  it('renders the date', () => {
    const testDate = (1525046400000);
    const wrapper = shallow((
      <ForecastSummary
        date={testDate}
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('.forecast-summary__date').text()).toEqual('Mon 30th Apr');
  });

  it('renders the temperature', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));

    expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('mockTemperature°c');
  });

  it('renders the description', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));

    expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
  });

  it('renders the icon', () => {
    const wrapper = shallow((
      <ForecastSummary
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    // console.log(wrapper.debug());
    expect(wrapper.find(WeatherIcon).length).toEqual(1);
    expect(wrapper.find(WeatherIcon).prop('iconId')).toEqual('mockIcon');
  });
});
