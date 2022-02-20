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
    <>
      <div>
        <input type="search" placeholder="Enter the location" onChange={e => {setSearch(e.target.value)}}/>
      </div>
      {!location ? (<p>No data found</p>):(
        <div>
          <h2>{search}</h2>
          <h1>{location.temp}</h1>
        </div>
      )}
    </>
  )
}

export default App
