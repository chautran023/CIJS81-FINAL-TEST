import React from "react";
import Search from './Search';
import { useState } from 'react';
import not_found from './img/not_found.png';


export default function Users() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [country, setCountry] = useState({});
  const [des, setDes] = useState({});
  const [max, setMax] = useState({});
  const [min, setMin] = useState({});
  const [err, setErr] = useState(false);

  const handleSearch = (city) => {
  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2cda5260d4113386fd53bde9e3dccb04`)
      .then(res => res.json())
      .then(result => {
        setErr(false);
        console.log(result.main.temp);
        setWeather(result.main);     
        console.log('name:', result.name);
        setLocation(result.name);
        setDes(result.weather[0].main);
        console.log('des:', result.weather[0].main);
        setCountry(result.sys.country);
        console.log('country:', result.sys.country);
        setMax(result.main.temp_max);
        setMin(result.main.temp_min);
        console.log('max:', result.main.temp_max);
      })
      .catch((error) => {
        console.log(error);
        setErr(true);
      });
  }
  console.log(weather);

  return (
    <div className="App">
      Tra cuu thoi tiet <br/>
      <Search  onChangeSearch={handleSearch}/>
      { Object.keys(weather).length === 0  ? <div></div> : 
        err ? <div className='position-absolute top-50 start-50 translate-middle'><img src = {not_found} /></div> : 
      <div>        
        <div className="container card border-success mb-3 position-absolute top-50 start-50 translate-middle" >
          <div className="card-header bg-transparent border-success">{location}<span>,</span> {country} </div>
          <div className="card-body text-success">
            <h5 className="main_img card-title">
              {des === 'Clouds'? <img src = {'https://cdn-icons-png.flaticon.com/512/414/414825.png'} /> : 
                des === 'Clear'?  <img src = {'https://cdn-icons-png.flaticon.com/512/6974/6974833.png'} /> :
                des === 'Haze'?  <img src = {"https://cdn-icons-png.flaticon.com/512/1197/1197102.png"} /> :
                des === 'Snow'?  <img src = {"https://cdn-icons-png.flaticon.com/512/642/642102.png"} /> :
                des === 'Rain'?  <img src = {"https://cdn-icons-png.flaticon.com/512/3351/3351979.png"} /> : 
                des === 'Drizzle'?  <img src = {'https://cdn-icons-png.flaticon.com/512/3076/3076129.png'} /> :                   
                des === 'Mist'?  <img src = {'https://cdn-icons-png.flaticon.com/512/4005/4005901.png'} /> :                    
                des === 'Smoke'?  <img src = {'https://cdn-icons-png.flaticon.com/512/4380/4380458.png'} />                  

                    : <img src = {not_found} /> 
              }
            </h5>
            <p className="des_div card-text">{des}</p>
          </div>
          <div className="card-footer bg-transparent border-success">{weather.temp}<span> °C </span>
          <div>          <span className="card-text">Temp Max: {max} °C     |</span>
                        <span className="card-text">Temp Min: {min} °C  </span>
          </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

