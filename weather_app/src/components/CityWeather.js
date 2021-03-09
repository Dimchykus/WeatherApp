
const CityWeather = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>Temp: {props.main.temp}</p>
        </div>
    )
}

export default CityWeather;
