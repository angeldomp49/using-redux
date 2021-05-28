import {createStore, applyMiddleware} from 'redux';
import loggingMiddleware from './loggingMiddleware';
import {rootReducer, initialState} from './reducers';

export const configureStore = () => {
    const store = createStore(
        rootReducer, 
        initialState, 
        applyMiddleware(loggingMiddleware)
        );
    return store;
};

export default configureStore;