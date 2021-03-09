import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import {setItem, setIsReady, setCityName, setCountryName} from "../actions/weather";
import CityWeather from "./CityWeather";
import axios from "axios";
const api = {
    key:"5cd66aa98df41dded9c26061435ff900",
    base:"https://openweathermap.org/data/2.5/weather"
}

const getWeather = (props) => {
    const {setItem} = props;
    const query = props.city
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${api.key}`)
        .then(res => res.json())
        .then(res => {setItem(res)
            props.setIsReady(true);
            console.log(res)
        })



    // const options = {
    //     method: 'GET',
    //     url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    //     params: {
    //         q: 'Lviv,ua',
    //         lat: '0',
    //         lon: '0',
    //         callback: 'test',
    //         id: '2172797',
    //         lang: 'null',
    //         units: '"metric" or "imperial"',
    //         mode: 'xml, html'
    //     },
    //     headers: {
    //         'x-rapidapi-key': 'fcbcb60977mshdc92cf776f462e7p11e953jsna531cfdb9d21',
    //         'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    //     }
    // };
    //
    // axios.request(options).then(function (response) {
    //     const obj = JSON.parse(response.data);
    //     props.setItem(response)
    //     console.log(obj);
    // }).catch(function (error) {
    //     console.error(error);
    // });

}

class App extends React.Component{

    render(){
        return(
            <div>
                <p>Weather</p>
                <input type="text" placeholder="country" onChange={event => this.props.setCountryName(event.target.value)}/>
                <input type="text" placeholder="city" onChange={event => this.props.setCityName(event.target.value)}/>
                <button onClick={() => getWeather(this.props)}>weather1</button>
                <button>weather2</button>
                {
                    this.props.isReady==true ? <CityWeather {...this.props.weather}/> : <div>none</div>
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        weather: state.weather_reducer.weather,
        isReady: state.weather_reducer.isReady,
        city: state.weather_reducer.city,
        country: state.weather_reducer.country,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItem: products => dispatch(setItem(products)),
        setIsReady: Ready => dispatch(setIsReady(Ready)),
        setCityName: City => dispatch(setCityName(City)),
        setCountryName: Country => dispatch(setCountryName(Country)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
