import React from 'react';
import './App.css';
import CityWeather from './OpenWeather/CityWeather';
import AerisWeather from './AerisWeather/AerisWeather';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p className="title">Weather</p>
        <input
          type="text"
          placeholder="country"
          onChange={ event => this.props.setCountryName(event.target.value) }
        />
        <input
          type="text"
          placeholder="city"
          onChange={ event => {
            this.props.setCityName(event.target.value);
            this.props.setIsReady(false);
          } }
        />
        <button onClick={ () => (this.props.FetchData(this.props), this.props.setSwitchWeather(0)) }>weather1</button>
        <button onClick={ () => (this.props.FetchDataAerisWeather(this.props), this.props.setSwitchWeather(1)) }>weather2</button>
        {

                    this.props.isReady != true ? <div>none</div> : (this.props.switchWeather == 0
                      ? <CityWeather { ...this.props.weather } /> : <AerisWeather { ...this.props.weather } />)
                }
      </div>
    );
  }
}

export default App;
