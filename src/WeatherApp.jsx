import SearchBox from './SearchBox.jsx';
import Mishra from './Mishra.jsx';
import React, { useState } from 'react';


export default function WeatherApp(){
    const [WeatherInfo, setWeatherInfo]= useState({
         city: "Pune",
    feelsLike: 30.28,
    humidity: 79,
    temp: 33.28,
    tempMax: 32.28,
    tempMin: 31.28,
    weather: "overcast clouds",
    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div  style={{textAlign: "center",
        backgroundImage: "url('https://i.pinimg.com/736x/99/c6/c0/99c6c0650009ea7e37d3fc92100daf9c.jpg')", 
        backgroundSize: "cover", height: "100vh"}}>
            <h3 style={{color:"white",fontSize:"5vh"}}>Weather app by mishra</h3>
            <SearchBox updateInfo={updateInfo} />
            <Mishra info={WeatherInfo}/>
        </div>
    )
}