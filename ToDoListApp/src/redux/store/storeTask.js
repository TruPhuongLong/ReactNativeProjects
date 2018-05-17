import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import reducerTask from '../reducers/reducerTask';
import reducerError from '../reducers/reducerError';
import {emptyErrorLoggerMiddleware} from '../middleware/logger';
import state from '../reducers/state';

const reducers = combineReducers({reducerTask, reducerError})
const middlewares = [thunk, emptyErrorLoggerMiddleware]; 

// if(__DEV__){
//     middlewares.push(logger);
// }

export default createStore(reducers, applyMiddleware(...middlewares));