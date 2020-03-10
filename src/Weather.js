import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function Weather() {

  useEffect(() => {
    fetchWeather();
  }, []);

  const [weather, setWeather] = useState([]);

  const fetchWeather = async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=59601,us&APPID=6a3a8ab31b4ba456f41f09e629f5be1f';
    const response = await axios.get(url)
    console.log(response);
    const data = response.data;
    // console.log(data);
     console.log(data.weather);
    setWeather(data.main);
   
    

  };
  console.log(weather)
  return (
   
    <div>
      {
       
        <h1 >{`Temp: ${weather.temp} Min: ${weather.temp_min} Max: ${weather.temp_max}`}</h1>
      }
    </div>
//   <div>{JSON.stringify(weather.description)}</div>
  );
}

export default Weather;