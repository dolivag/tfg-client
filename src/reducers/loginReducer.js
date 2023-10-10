import * as actionTypes from '../constants/actionTypes';

const initialState = {
    isLogged: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN_OK:
            return { ...state, isLogged: true }
        default:
            return state
    }
}