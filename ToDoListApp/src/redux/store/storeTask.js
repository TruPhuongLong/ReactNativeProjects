import {createStore, applyMiddleware} from 'redux';
import reducerTask from '../reducers/reducerTask';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [thunk];

if(__DEV__){
    middlewares.push(logger);
}

export default createStore(reducerTask, applyMiddleware(...middlewares));