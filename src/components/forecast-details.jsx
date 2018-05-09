import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import '../styles/forecast-details.scss';

const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="forecast-details__date">
      <span>{Moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecast-details__maxtemp">
      <span>{props.max}</span>
    </div>
    <div className="forecast-details__mintemp">
      <span>{props.min}</span>
    </div>
    <div className="forecast-details__humidity">
      <span>{props.humidity}</span>
    </div>
    <div className="forecast-details__windspeed">
      <span>{props.speed}</span>
    </div>
    <div className="forecast-details__winddir">
      <span>{props.direction}</span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
};

export default ForecastDetails;
