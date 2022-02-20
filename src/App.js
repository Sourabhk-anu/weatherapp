import React, {useState, useEffect} from 'react'

const App = () => {

  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async() => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=8802d56758fd68b06737c5ddb22d1cad`;
      const res = await fetch(url);
      const data = await res.json();
      setLocation(data.main);
    };
    fetchApi();
  },[search]);

  return (
    <div className="container">
        <input type="search" placeholder="Enter the location" onChange={e => {setSearch(e.target.value)}}/>
      {!location ? (<p>No data found</p>):(
        <div className="weatherDetails">
          <h1>Location: {search}</h1>
          <h2>Temp: {location.temp}</h2>
          <div className="temp">
          <p>Min temp: {location.temp_min}</p>
          <p>Max temp: {location.temp_max}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
