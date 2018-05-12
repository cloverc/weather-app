import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import '../styles/forecast-details.scss';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="forecast-details__date">
      <span>{Moment(props.forecast.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecast-details__maxtemp">
      <span className="forecast-details__label">Max Temperature: </span>
      <span>{props.forecast.temperature.max}&deg;c</span>
    </div>
    <div className="forecast-details__mintemp">
      <span className="forecast-details__label">Min Temperature: </span>
      <span>{props.forecast.temperature.min}&deg;c</span>
    </div>
    <div className="forecast-details__humidity">
      <span className="forecast-details__label">Humidity: </span>
      <span>{props.forecast.humidity}</span>
    </div>
    <div className="forecast-details__windspeed">
      <span className="forecast-details__label">Wind: </span>
      <span>{props.forecast.wind.speed}mph {props.forecast.wind.direction}</span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastDetails;
