import * as types from './types';

export const fetchNewTime = () => ({
    type: types.FETCH_NEW_TIME,
    payload: new Date().toString(),
    meta: {
        type: 'api',
        url: 'https://tintamexicanaimpresos.com/date/'
    }
});

export const login = (user) => ({
        type: types.LOGIN,
        payload: user
    });


export const logout = () => ({
        type: types.LOGOUT
    });