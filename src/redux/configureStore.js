import {createStore, applyMiddleware} from 'redux';
import loggingMiddleware from './loggingMiddleware';
import apiMiddleware from './apiMiddleware';
import {rootReducer, initialState} from './reducers';

export const configureStore = () => {
    const store = createStore(
        rootReducer, 
        initialState, 
        applyMiddleware(apiMiddleware,loggingMiddleware)
        );
    return store;
};

export default configureStore;