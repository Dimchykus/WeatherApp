import WeatherDay from './WeatherDay';

const AerisWeather = (props) => {
  const day = props.forecast.forecastday.map(obj => <WeatherDay weather={ obj } />);
  return (
    <div>
      <h1>{props.location.name}</h1>
      {day}
    </div>
  );
};

export default AerisWeather;
