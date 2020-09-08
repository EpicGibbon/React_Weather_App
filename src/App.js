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
      .then(result => setWeather(result))
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
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search.."
          />
        </div>
        <div className="location-area">
          <div className="location">Houston, TX, US</div>
          <div className="date">{dateSelector(new Date())}</div>
        </div>
        <div className="weather-area">
          <div className="temp">
            15c
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
