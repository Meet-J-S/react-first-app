import allReducers from './reducers/index'
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancer =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancer(
    applyMiddleware(thunk)
);

export default createStore(allReducers, enhancer);
