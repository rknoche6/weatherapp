import React from "react";
import "./App.css";
import Weather from "./components/weather.component";
import Search from "./components/search.component";
import {
  faSun,
  faCloud,
  faStarOfLife,
  faCloudShowersHeavy,
  faCloudRain,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

require("dotenv").config();

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      location: "",
      temp: 0,
      precip: "",
      icon: faSun,
      loading: true,
    };
  }

  componentDidMount() {
    this.getWeather("New York");
  }

  loadWeather = (e) => {
    e.preventDefault();
    const cityInput = e.target.elements.city.value;

    this.getWeather(cityInput);
  };

  getWeather = async (cityInput) => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}`
    );
    const res = await api_call.json();
    if (res.name !== undefined) {
      const tempCelsius = (res.main.temp - 273).toFixed(1);
      this.setState({
        location: res.name,
        temp: tempCelsius,
        precip: res.weather[0].main,
        icon: this.getIcon(res.weather[0].id),
        loading: false,
      });
    }
  };

  getIcon(value) {
    const thirdPlace = parseInt(value.toString()[0]);

    switch (thirdPlace) {
      case 2:
        return faBolt;
      case 3:
        return faCloudRain;
      case 5:
        return faCloudShowersHeavy;
      case 6:
        return faStarOfLife;
      case 7:
        return faCloud;
      case 8:
        return faCloud;
      default:
        return faSun;
    }
  }

  showSpinner() {
    return <div className="spinner-border" role="status"></div>;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Search onSubmit={this.loadWeather} />
          <Weather
            location={this.state.location}
            temp={this.state.temp}
            precip={this.state.precip}
            icon={this.state.icon}
            loading={this.state.loading}
          />
        </div>
      </div>
    );
  }
}

export default App;