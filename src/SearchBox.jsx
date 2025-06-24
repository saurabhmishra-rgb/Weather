import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import './SearchBox.css';

export default function SearchBox({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="3a4c4bdb8ea90da8b5fac2a14e53a9d8";
  
    
  let getWeatherInfo = async()=>{
      let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonReseponse=await response.json();
      console.log(jsonReseponse);
      
      let result={
        city: city,
        temp: jsonReseponse.main.temp,
         tempMin: jsonReseponse.main.temp_min,
          tempMax: jsonReseponse.main.temp_max,
           humidity: jsonReseponse.main.humidity,
           feelsLike: jsonReseponse.main.feels_like,
           weather : jsonReseponse.weather[0].description,
      };
      console.log(result);
      return result;

    }
  
    

    let [city, setCity]= useState("");

     let handleChange = (event) =>{
        setCity(event.target.value);
     }
     let handleSubmit = async(event) =>{
        
        event.preventDefault();
        console.log(city);
        let Information = await getWeatherInfo();
        updateInfo(Information);
        setCity("");
        
        
     }
    return(
        <div className="SearchBox">
            <br></br>
            <br></br>
            <form className="mishra" onSubmit={handleSubmit}>
               <TextField id="city"
                label="City name" 
                variant="outlined"  
                required value={city} 
                onChange={handleChange}
                style={{width: "300px", margin: "10px",backgroundColor: "skyblue",
                    borderRadius: "32px"

                }}
                 /> 
               <br></br>
               <br></br>
               <Button variant="contained" type="submit">
        Send
      </Button>
            </form>
        </div>
    )
    }