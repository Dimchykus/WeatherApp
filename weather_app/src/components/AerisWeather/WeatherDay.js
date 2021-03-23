import WeatherHourly from './WeatherHourly';

const WeatherDay = (props) => {
  const hour = props.weather.hour.map(obj => <WeatherHourly hour={ obj } />);
  return (
    <div>
      <h1>{props.weather.date}</h1>
      <h1>Averange temp: {props.weather.day.avgtemp_c}</h1>
      <div>{hour}</div>
    </div>
  );
};

export default WeatherDay;
