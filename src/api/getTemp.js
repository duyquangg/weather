const URL =
  'http://api.openweathermap.org/data/2.5/find?units=metric&appid=e88e9c6575924c79cc61585a79e039a1&q=';

function getTemp (cityName) {
  return fetch (URL + cityName)
    .then (res => res.json ())
    .then (resJSON => resJSON.list[0].main.temp);
}

export default getTemp;
