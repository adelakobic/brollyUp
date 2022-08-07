// Set API key
const APIkey = '8ae4d5b245e37bca05b9a458cedd88f1';

const btn = document.querySelector(".btn");  //DO NOT MESS

function getApi() {}
    // fetch request to get API link - this works - don't touch v this block - API KEY
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=8ae4d5b245e37bca05b9a458cedd88f1';
    btn.onclick = () => {
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });
} // dont touch ^ this block

//endpoint
var endPoint = "https://api.openweathermap.org/data/2.5/onecall?";

// city Search section - if not working API key - remove the var SearchFormEl
var searchFormEl = document.querySelector('#city-search')
function citySearchSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#searchCity').value;
    if (!searchInputVal) {
        console.error('Enter city please.');
        return;
    }
}
var cityName = 'London';
// from: https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys 
var searchForCity = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&appid=" + APIkey;
console.log(searchForCity);

function getCity() {}
    // fetch request to get city & API link
    var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&appid=" + APIkey;
    btn.onclick = () => {
  
    fetch(queryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });
} // not working yet