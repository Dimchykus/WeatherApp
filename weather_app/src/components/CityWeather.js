import "./Styles/CityWeather.css"

const CityWeather = (props) => {
    const {name, temp} = props;
    const image_url = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`;
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.weather[0].description}</p>
            <p>Temp: {Math.floor(props.main.temp - 273.15)}</p>
            <img src={image_url}/>
        </div>
    )
}

export default CityWeather;
