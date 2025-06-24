import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Mishra.css';

export default function Mishra({info}){
   // const image="https://i.pinimg.com/736x/24/c8/91/24c89175ecdde817b2ea383f5adc5b61.jpg"
    const COLD_URL="https://i.pinimg.com/736x/7f/cc/e5/7fcce5ac0c5b0b209937a7e56b420456.jpg";
        
      const   HOT_URL="https://i.pinimg.com/736x/cc/c6/75/ccc6751ff06ee8201e5c48414acca647.jpg";
      const   RAIN_URL="https://i.pinimg.com/736x/eb/09/70/eb0970241fe2235bd8ad4d4a50ece021.jpg";
      
    return(
        <div className="Mishra">
            <>
              <h3 style={{color:"white",fontSize:"3vh"}}>Weather Information - {info.weather}</h3>
              <div className="CardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 
            ?RAIN_URL
            : info.temp > 15
             ? HOT_URL 
             : COLD_URL
            }
          
        title="green iguana"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>
           <p>Tempreture={info.temp}&deg;c;</p>
            <p> Humidity={info.humidity}</p>
            <p>Feels Like={info.feelsLike}&deg;c;</p>
            <p>Max Temp={info.tempMax}&deg;c;</p>
            <p>Min Temp={info.tempMin}&deg;c;</p>
            <p>The weather can be described as <i>{info.weather}</i>={info.feelsLike}&deg;c</p>
          </div>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </>
        </div>
    )
}