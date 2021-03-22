import {FetchData} from "./../api"

export const setItem = (weather) => {
    return{
        type: "SET_DATA",
        payload: weather
    }
}
export const setIsReady = (isReady) => (
    {
        type: "SET_ISREADY",
        payload: isReady
    }
)
export const setCityName = (City) => (
    {
        type: "SET_CITY_NAME",
        payload: City
    }
)
export const setCountryName = (Country) => (
    {
        type: "SET_COUNTRY_NAME",
        payload: Country
    }
)