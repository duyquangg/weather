import {createStore} from 'redux'
const defaultState = {
    cityName: null,
    temp: null,
    isLoading: false,
    error: false
},

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_FETCH':
            return { cityName: null, temp: null, isLoading: true, error: false };
        case 'FETCH_SUCCESS':
            return { cityName: action.cityName, error: false, isLoading: false, temp: action.temp };
        default:
        case 'FETCH_ERROR':
            return { cityName: null, error: true, isLoading: false, temp: null };
        default:
            return state;
    }
}
const store = createStore(reducer);

export default store;

