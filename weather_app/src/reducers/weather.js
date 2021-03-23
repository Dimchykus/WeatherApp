const initialState = {
  weather: null,
  isReady: false,
  city: '',
  country: '',
  weather_api: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case  'SET_DATA':
      return {
        ...state,
        weather: action.payload
      };
    case  'SET_ISREADY':
      return {
        ...state,
        isReady: action.payload
      };
    case  'SET_CITY_NAME':
      return {
        ...state,
        city: action.payload
      };
    case  'SET_COUNTRY_NAME':
      return {
        ...state,
        country: action.payload
      };
    case  'CHANGE_WEATHER':
      return {
        ...state,
        weather_api: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
