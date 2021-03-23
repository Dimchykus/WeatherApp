import { combineReducers } from 'redux';
import reducer from './weather';

export default combineReducers({
  weather_reducer: reducer
});
