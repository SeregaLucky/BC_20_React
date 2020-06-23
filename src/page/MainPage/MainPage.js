import React, { Component } from 'react';
import { getWeatherNow } from '../../servises/api';

class MainPage extends Component {
  state = {
    weatherNowDay: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    console.log('componentDidMount');

    // this.setState({ isLoading: true });

    // getWeatherNow()
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ weatherNowDay: data });
    //   })
    //   .catch(error => this.setState({ error: error }))
    //   .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('RENDER');
    const { weatherNowDay, isLoading, error } = this.state;

    return (
      <>
        {weatherNowDay && (
          <div>
            <h2>{weatherNowDay.name}</h2>
            <p>Temp: {weatherNowDay.main.temp}</p>
            <p>Speed: {weatherNowDay.wind.speed}</p>
          </div>
        )}

        {isLoading && <p style={{ background: 'orange' }}>LOADING now...</p>}

        {error && <p>ERROR now: {error.response.data.message} </p>}
      </>
    );
  }
}

export default MainPage;
