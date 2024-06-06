import React from "react";
import './App.css';
import Weather from "./Weather";


export default function App() {
  return(
  <div className="weather">
    <div className="container">
      <Weather />
    <footer>
This project was coded by {" "}
      <a href="https://github.com/Olian741" target="_blank" rel="noreferrer">Olian Mkhawana</a>{" "}
      and is {" "} 
      <a href="https://github.com/weather-react-app" target="_blank" rel="noreferrer"> open-soruced on GitHub </a>
     and is hosted on 
     <a href="https://netlify.com/weather-react-app" target= "_blank" rel="noreferrer"
     > netlify</a>
    </footer>
  </div>
  </div>
);
}
       
