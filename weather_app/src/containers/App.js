// import App from "./../components/App"
// import {setItem} from"./../actions/weather"
// import {connect} from "react-redux";

import {FetchData, FetchDataAerisWeather} from "../api";
import {setCityName, setCountryName, setIsReady, switchWeather} from "../actions/weather";
import {connect} from "react-redux";
import App from "../components/App";

const mapStateToProps = (state) => {
    return {
        weather: state.weather_reducer.weather,
        isReady: state.weather_reducer.isReady,
        city: state.weather_reducer.city,
        country: state.weather_reducer.country,
        switchWeather: state.weather_reducer.weather_api,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchData: data => dispatch(FetchData(data)),
        FetchDataAerisWeather: data => dispatch(FetchDataAerisWeather(data)),
        setIsReady: Ready => dispatch(setIsReady(Ready)),
        setCityName: City => dispatch(setCityName(City)),
        setCountryName: Country => dispatch(setCountryName(Country)),
        setSwitchWeather: num => dispatch(switchWeather(num)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);