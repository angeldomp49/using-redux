import {combineReducers} from 'redux';
import * as currentTime from './currentTime';
import * as currentUser from './currentUser';
import * as printLabel from './printLabel';

export const rootReducer = combineReducers({
    currentTime: currentTime.reducer,
    currentUser: currentUser.reducer,
    name: printLabel.reducer
});

export const initialState = {
    currentTime: currentTime.initialState,
    currentUser: currentUser.initialState,
    name: printLabel.initialState
};

export default rootReducer;