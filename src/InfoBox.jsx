 export default function InfoBox(){
    let info={
    feelsLike: 310.28,
    humidity: 79,
    temp: 303.28,
    tempMax: 303.28,
    tempMin: 303.28,
    weather: "overcast clouds",
    };
    return(
        <div className="InfoBox">
            <h3>weather Information {info}</h3>
        </div>
    );
}
