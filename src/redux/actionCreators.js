export function startFetchData(){
    return { type: 'START_FETCH'};
}
export function fetchSuccess(cityName,temp){
    return {
        type: 'FETCH_SUCCESS',
        cityName,
        temp
    }
}  
export function fetchErorr(){
    return {type: 'FETCH_ERROR'}
} 