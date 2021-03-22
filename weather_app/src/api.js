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
                if (res.cod != 200){
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
