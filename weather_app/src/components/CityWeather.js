const CityWeather = (props) => {
    const {name, temp} = props;
    const image_url = `http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`;
    return (
        <div>
            <p>{props.name}</p>
            <p>Temp: {Math.floor(props.main.temp - 273.15)}</p>
            <img src={image_url}/>
        </div>
    )
}

export default CityWeather;
