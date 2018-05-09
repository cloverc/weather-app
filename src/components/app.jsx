import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import '../styles/app.scss';

const App = props => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummaries forecasts={props.forecasts} />
    <ForecastDetails
      date={props.forecast.date}
      max={props.forecast.temperature.max}
      min={props.forecast.temperature.min}
      humidity={props.forecast.humidity}
      speed={props.forecast.wind.speed}
      direction={props.forecast.wind.direction}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    humidity: PropTypes.number,
  }).isRequired,
};

export default App;
