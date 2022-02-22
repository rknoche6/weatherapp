import React from 'react';
import './App.css';
import Weather from './components/weather.component'
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      location: '',
      temp: 0,
      precip: ''
    };    

  }

  componentDidMount(){
    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${API_KEY}`);
    const res = await api_call.json();
    console.log(res)
    if(res.name != undefined){
      this.setState({
        location: res.name,
        temp: res.main.temp,
        precip: res.weather[0].main
      })
    }
    
  }

  render(){
    return (
    <div className="App">
      <div className="container">
      <Weather location={this.state.location} temp={this.state.temp} precip={this.state.precip} />
      </div>
    </div>
  );
}
}

export default App;