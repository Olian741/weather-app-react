import React from "react";


export default function Weather(){
    <div className="weather-app">
      <header>
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city">
              Paris
            </h1>
            <p className="current-details">
              <span></span>, moderate rain <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="current-temperature-icon">☀️</span>
            <span className="current-temperature-value">
              24
            </span>
            <span className="current-temperature-unit">°C</span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by
          <a href="https://github.com/Olian741" target="_blank" rel="noreferrer">
            {" "}
            Olian Mkhawana
          </a>{" "}
          and is
          <a
            href="https://github.com/Olian741/my-Shecodes-weather-project" target="_blank" rel="noreferrer"
          >
            {" "}
            on GitHub
          </a>{" "}
          and
          <a
            href="https://splendorous-taiyaki-eced19.netlify.app/"
            target="_blank" rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>   


}

       