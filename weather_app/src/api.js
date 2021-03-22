import {setIsReady, setItem} from "./actions/weather"
import * as action from "./actions/weather"

const api = {
    key: "5cd66aa98df41dded9c26061435ff900",
    base: "http://api.openweathermap.org/data/2.5/weather"
}
export const FetchData = ({city, country}) => {
    return dispatch => {
        dispatch(setIsReady(false))
        fetch(`${api.base}?q=${city},${country}&APPID=${api.key}`)
            .then(res => res.json())
            .then(res => {
                if (res.cod != 200) {
                    dispatch(setIsReady(false));
                } else {
                    dispatch(setItem(res))
                    dispatch(setIsReady(true));
                    console.log(res)
                }

            }).catch(function (error) {
            console.error(error);
            return null;
            //setIsReady(false);
        });
    }
}
export const FetchDataAerisWeather = ({city}) => {
    return dispatch => {
        console.log("here")
        //dispatch(setIsReady(false))
        fetch(`http://api.weatherapi.com/v1/current.json?key=3be7e097d415461a939103600212203&q=London`, {mode: 'cors'})
            .then(res => {
                const {location} = res;
                dispatch(setItem(location))
                dispatch(setIsReady(true));
                console.log(location)
            }).catch(function (error) {
            console.error(error);
        })
        //     .then(res => {
        //         if (res.cod != 200){
        //             //dispatch(setIsReady(false));
        //         } else {
        //             //dispatch(setItem(res))
        //             //dispatch(setIsReady(true));
        //             console.log(res)
        //         }
        //
        //     }).catch(function (error) {
        //     console.error(error);
        //     return null;
        //     //setIsReady(false);
        // });
    }
}
