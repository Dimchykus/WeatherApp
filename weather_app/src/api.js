import { setIsReady, setItem } from './actions/weather';

const api = {
  key: '5cd66aa98df41dded9c26061435ff900',
  base: 'http://api.openweathermap.org/data/2.5/weather'
};
export const FetchData = ({ city, country }) => dispatch => {
  dispatch(setIsReady(false));
  fetch(`${ api.base }?q=${ city },${ country }&APPID=${ api.key }`)
    .then(res => res.json())
    .then(res => {
      if (res.cod !== 200) {
        dispatch(setIsReady(false));
      } else {
        dispatch(setItem(res));
        dispatch(setIsReady(true));
        console.log(res);
      }
    }).catch((error) => {
      console.error(error);
      return null;
      // setIsReady(false);
    });
};
export const FetchDataAerisWeather = ({ city }) => dispatch => {
  console.log('here');
  dispatch(setIsReady(false));
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=3be7e097d415461a939103600212203&q=${ city }&days=3&aqi=no&alerts=no`)
    .then(response => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      if (jsonData.hasOwnProperty('error')) {
        dispatch(setIsReady(false));
      } else {
        dispatch(setItem(jsonData));
        dispatch(setIsReady(true));
      }
    })
    .catch((error) => {
      // handle your errors here
      console.error(error);
    });
};
