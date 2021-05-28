import {createStore, combineReducers} from 'redux';
import {rootReducer, initialState} from './reducers';
import {reducer as userReducer, initialState as userInitState} from './currentUser';

export const configureStore = () => {
    const store = createStore(combineReducers({
        time: rootReducer,
        user: userReducer
    }), {
        time: initialState,
        user: userInitState
    })
    return store;
};

export default configureStore;