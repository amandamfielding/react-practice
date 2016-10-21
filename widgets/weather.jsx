import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: null, city: 'loading...'};
    this.api_key = '3742b302bb92a8dc12a4914d0f52e033';
    this.pos = {};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.pos = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      };

      $.ajax({
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${this.pos.latitude}&lon=${this.pos.longitude}&APPID=${this.api_key}`,
        dataType: 'json',
        success: (weather) => {
          let temperature = this.toF(weather.main.temp);
          let city = weather.name;
          this.setState({temperature, city});
        }
      });
    });
  }

  toF(temp) {
    let f = temp * (9/5) - 459.67;
    return this.round(f);
  }

  round(num) {
    return Math.round(num*100) / 100;
  }

  render() {
    return (
      <div className="widget col-1">
        <h2>
          Weather
        </h2>
        <div className="weather-box">
          <h3>{this.state.city}</h3>
          <h3>{this.state.temperature} degrees</h3>
        </div>
      </div>
    );
  }
}

export default Weather;
