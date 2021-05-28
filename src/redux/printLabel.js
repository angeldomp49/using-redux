import * as types from './types';

export const initialState = {
    name: 'unknown'
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LABEL:
            return{
                ...state,
                name: action.payload
            };
    
        default:
            return state;
    }
};

export default reducer;