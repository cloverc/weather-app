import React from 'react';
import axios from 'axios';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import '../styles/app.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
      // selectedDate: this.state.forecasts[0].date,
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  componentDidMount() {
    // make api call
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast')
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          selectedDate: response.data.forecasts[0].date,
        });
      }).catch((err) => {
        console.log(err);
      });
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    const selectedForecast = (
      this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate)
    );
    // console.log(selectedForecast);
    // console.log(this.state);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {selectedForecast &&
          <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

export default App;
