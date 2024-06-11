import React, {useState} from "react";
import "./weather.css";
import axios from "axios";
import Date from "./date";


export default function Weather(props){
  const[weatherData, setWeatherData] = useState({ready : false});
   const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
    
   setWeatherData({
    ready: true,
    temperature: response.data.main.temperature,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: response.data.name,
    description: response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  
   });

  }

  if(weatherData.ready){
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
  
      <h1>{weatherData.city}</h1>
      <ul>
        <li>  </li>
        <li className="text-capitalize">{weatherData.description}</li>
        
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity:72%</li>
            <li>Wind:{weatherData.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
  } else {
let apiKey = "535cacbb3f8a0df0aeb4790235b9541f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading..";
}
}

  