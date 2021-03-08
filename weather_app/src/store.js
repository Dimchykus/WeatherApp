import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'thunk'
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
