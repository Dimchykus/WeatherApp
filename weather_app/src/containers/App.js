// import App from "./../components/App"
// import {setItem} from"./../actions/weather"
// import {connect} from "react-redux";

import {FetchData} from "../api";
import {setCityName, setCountryName, setIsReady} from "../actions/weather";
import {connect} from "react-redux";
import App from "../components/App";

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
        FetchData: (city, country) => dispatch(FetchData(city, country)),
        setIsReady: Ready => dispatch(setIsReady(Ready)),
        setCityName: City => dispatch(setCityName(City)),
        setCountryName: Country => dispatch(setCountryName(Country)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);