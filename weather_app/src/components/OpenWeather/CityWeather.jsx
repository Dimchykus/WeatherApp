import './CityWeather.css';

const CityWeather = (props) => {
  const imageUrl = `http://openweathermap.org/img/wn/${ props.weather[0].icon }@2x.png`;
  console.log(`123${ props }`);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.weather[0].description}</p>
      <p>Temp: {Math.floor(props.main.temp - 273.15)}</p>
      <img src={ imageUrl } />
    </div>
  );
};

export default CityWeather;
