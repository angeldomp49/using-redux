import {combineReducers} from 'redux';
import * as currentTime from './currentTime';
import * as currentUser from './currentUser';

export const rootReducer = combineReducers({
    currentTime: currentTime.reducer,
    currentUser: currentUser.reducer
});

export const initialState = {
    currentTime: currentTime.initialState,
    currentUser: currentUser.initialState
};

export default rootReducer;