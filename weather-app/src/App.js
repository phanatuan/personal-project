import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      temperature: "",
      weather: null,
      isLoading: true,
      error: ""
    };
  }

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setTimeout(this.getWeather(latitude, longitude),4000); //Take NOTE
    });
  };

  getWeather = (latitude, longitude) => {
    const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
    const api = `http://api.openweathermap.org/data/2.5/aweather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    fetch(api)
      .then(response => {
        if (response.ok) {
          return response
        }
        else { 
          let error = new Error(`Error ${response.status} is ${response.statusText}`);
          throw error;
        }
       })
      .then(response => response.json())
      .then(data => {
        this.setState({
          locationName: data.name,
          temperature: data.main.temp,
          weatherDescription: data.weather[0].description,
          isLoading: false,
        });
        console.log(data);
      })
      .catch(error => { 
        alert(`Data could not be fetched ${error.message}`)
      });
  };

  render() {
    const { locationName, temperature, weatherDescription, isLoading } = this.state;
    const temperatureC = temperature - 273.15;
    const temperatureF = ((temperature - 273.15) * 9) / 5 + 32;
    return (
      <div className="container-fluid text-white my-auto">
        <div className="container mx-auto my-4 py-4">
          <div className="row justify-content-center text-center">
            <h1 className="col-12 display-4 font-weight-bold my-2 py-3 text-success">
              Awesome Weather App
            </h1>
            {isLoading ? (
              <h1>I am Loadinggggg</h1>
            ) : (
              <div className="bg-transparent">
                <h2 className="col-12">{locationName}</h2>
                <h3 className="col-12 text-danger">
                  {temperature && `${temperatureC} °C / ${temperatureF} °F`}
                </h3>
                <h3 className="col-12">{weatherDescription}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
