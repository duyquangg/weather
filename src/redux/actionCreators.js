import getTemp from '../api/getTemp';
export function startFetchData() {
    return { type: 'START_FETCH' };
}
export function fetchSuccess(cityName, temp) {
    return {
        type: 'FETCH_SUCCESS',
        cityName,
        temp
    }
}
export function fetchErorr() {
    return { type: 'FETCH_ERROR' }
}

//redux thunk de xu ly bat dong bo
export function fetchDataThunk(cityName) {
    return dispatch => {
        dispatch(startFetchData());
        getTemp(cityName)
            .then(temp => dispatch(fetchSuccess(cityName, temp)))
            .catch(() => dispatch(fetchErorr()))
    }
}