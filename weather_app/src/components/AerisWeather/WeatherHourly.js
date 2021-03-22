
const WeatherHourly = (props) => {
    return (
        <div>
            <div>Time: {props.hour.time}. Temp: {props.hour.temp_c}</div>

        </div>
    )
}
export default WeatherHourly;