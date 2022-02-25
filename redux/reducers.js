import { combineReducers } from 'redux'

const initialState = {
    detail: ''
}

function upbitReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DETAIL':
            return { ...state, detail: action.payload }
        default:
            return state
    }
}

function bithumbReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DETAIL':
            return { ...state, detail: action.payload }
        default:
            return state
    }
}

export default Reducers = combineReducers({ upbitReducer, bithumbReducer })