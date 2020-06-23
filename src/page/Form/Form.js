import React, { Component } from 'react';
import { getWeatherNow } from '../../servises/api';
import MainPage2 from '../MainPage2/MainPage2';

class Form extends Component {
  state = {
    city: '',

    weatherNowDay: null,
    isLoading: false,
    error: null,
  };

  handleChange = ({ target }) => {
    this.setState({ city: target.value });
  };

  submit = e => {
    e.preventDefault();
    const { city } = this.state;

    if (city === '') return;

    getWeatherNow(city)
      .then(data => {
        console.log(data);
        this.setState({ weatherNowDay: data });
      })
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { city, weatherNowDay } = this.state;

    return (
      <>
        <form onSubmit={this.submit}>
          <input
            value={city}
            onChange={this.handleChange}
            type="text"
            name="city"
          />
          <button type="submit">Find</button>
        </form>

        {weatherNowDay && <MainPage2 weatherNowDay={weatherNowDay} />}
      </>
    );
  }
}

export default Form;
