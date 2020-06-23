import React, { Component } from 'react';
import { getWeatherNow } from '../../servises/api';

class MainPage2 extends Component {
  state = {
    weatherNowDay: this.props.weatherNowDay,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    // console.log('componentDidMount');
    // this.setState({ isLoading: true });
    // getWeatherNow()
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ weatherNowDay: data });
    //   })
    //   .catch(error => this.setState({ error: error }))
    //   .finally(() => this.setState({ isLoading: false }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.weatherNowDay === this.props.weatherNowDay) return;

    this.setState({ weatherNowDay: this.props.weatherNowDay });
    console.log('componentDidUpdate');
  }

  render() {
    console.log('RENDER  MainPage2');
    const { weatherNowDay, isLoading, error } = this.state;
    // const { weatherNowDay } = this.props;
    // console.log('MainPage2 weatherNowDay', weatherNowDay);

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

export default MainPage2;
