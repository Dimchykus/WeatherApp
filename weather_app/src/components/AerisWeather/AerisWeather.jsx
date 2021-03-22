import WeatherDay from "./WeatherDay";

const AerisWeather = (props) => {
   let day = props.forecast.forecastday.map(obj => <WeatherDay weather={obj}/>)
    return (
        <div>
            <h1>{props.location.name}</h1>
            {day}
        </div>
    )
}

export default AerisWeather;
{
    /*
    {
    "location": {
        "name": "Lviv",
        "region": "",
        "country": "Ukraine",
        "lat": 49.83,
        "lon": 24,
        "tz_id": "Europe/Kiev",
        "localtime_epoch": 1616445372,
        "localtime": "2021-03-22 22:36"
    },
    "current": {
        "last_updated_epoch": 1616445006,
        "last_updated": "2021-03-22 22:30",
        "temp_c": -2,
        "temp_f": 28.4,
        "is_day": 0,
        "condition": {
            "text": "Clear",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
            "code": 1000
        },
        "wind_mph": 4.3,
        "wind_kph": 6.8,
        "wind_degree": 290,
        "wind_dir": "WNW",
        "pressure_mb": 1014,
        "pressure_in": 30.4,
        "precip_mm": 0,
        "precip_in": 0,
        "humidity": 74,
        "cloud": 0,
        "feelslike_c": -6.2,
        "feelslike_f": 20.8,
        "vis_km": 10,
        "vis_miles": 6,
        "uv": 1,
        "gust_mph": 12.5,
        "gust_kph": 20.2
    }
}*/
}