import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="forecast-summary__date">
      <span>{Moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecast-summary__temperature">
      <span>{props.temperature}&deg;c</span>
    </div>
    <div className="forecast-summary__description">
      <span>{props.description}</span>
    </div>
    <div className="forecast-summary__icon">
      <span><WeatherIcon name="owm" iconId={props.icon} /></span>
    </div>
    <button onClick={() => props.onSelect(props.date)}>More details</button>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
