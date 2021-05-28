import * as types from './types';

const host = 'https://localhost:8000/date';

export const fetchNewTime = () => ({
    type: types.FETCH_NEW_TIME,
    payload: new Date().toString()
});

export const login = (user) => ({
        type: types.LOGIN,
        payload: user
    });


export const logout = () => ({
        type: types.LOGOUT
    });