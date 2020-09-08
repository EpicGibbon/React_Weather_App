import React, { useState } from 'react';

const API = {
  key: "c13c64c10390eb9b4417eb4f94f64ca1",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateSelector = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    //We are 1st to see what the input is, then if there is an input and its degree is above 16c we will show the app warm background, else cold background
    <div className={(typeof weather.main != "undefined")
      ? ((weather.main.temp > 16)
        ? 'app warm'
        : 'app')
      : 'app'}>

      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search.."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-area">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateSelector(new Date())}</div>
            </div>
            <div className="weather-area">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
          </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
