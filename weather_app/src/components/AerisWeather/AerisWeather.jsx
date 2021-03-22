import "./CityWeather.css"

const AerisWeather = (props) => {
    const {temp, name} = props;
    return (
        <div>
            <h1>{name}</h1>
            {/*<p>{props.weather[0].description}</p>*/}
            <p>Temp: {Math.floor(temp - 273.15)}</p>
        </div>
    )
}

export default AerisWeather;
