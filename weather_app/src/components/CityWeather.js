
const CityWeather = (props) => {
    const {name, temp} = props;
    return (
        <div>
            <p>{props.name}</p>
            <p>Temp: {props.main.temp}</p>
        </div>
    )
}

export default CityWeather;
