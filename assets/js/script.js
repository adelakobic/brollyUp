// Set API key
const APIkey = '8ae4d5b245e37bca05b9a458cedd88f1';
var endPoint;
var userSearch = document.querySelector("#city-input");

const btn = document.querySelector(".btn");  //DO NOT MESS

function getApi() {}
    // fetch request to get API link - this works - don't touch
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=8ae4d5b245e37bca05b9a458cedd88f1';
    btn.onclick = (requestUrl) => {
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        addData(data);
        console.log(data)
      });
  
} // dont touch ^ this block

//input from search box to return
var cityName = 'London';
// from: https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys 
var searchForCity = //'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&appid=" + APIkey;
console.log(searchForCity);
// query selectors for results
var resultTextEl = document.querySelector('#resultText');
var resultContentEl = document.querySelector('#resultContent');

// seach for city - if input box remains blank then should give an alert (html L27 mini proj)
function searchCitySubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#searchCity').value;
  if (!searchInputVal) {
    alert('You need a search input value!');
    return;
  }

  var queryString = '' + searchInputVal;

  location.assign(queryString);
}

function getParams() {
  var searchParams = document.location.search.split('&');
  // get querry values
  var query = searchParams[0].split('=').pop();

  searchApi(query);
}

// print the results into console log and into resultText and resultContent
function printResults(resultDay) {
  console.log(resultDay);

  // set up div to hold search result content on page
  var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'text-dark','text-bg-warning','mb-3', 'p-3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

}
// event listener 
searchForCity.addEventListener('click', searchCitySubmit);


// Get the API for today's weather - the next hour - 3 hours for today

    //fetch request to get a list of cities for the weather map - no3 lesson

    // enter city name in text box - should get info displayed in 'Home Weather' section AND '5-day forecast'
    
            
                // create elements to display data in '#hWeather' block to display today's weather
               

                // needs to be converted to buttons you can click

                //set the text of link and href of link
               

                // append the link to table data
             

// Search button input 


    // fetch request for list of cities - web link?
    


    // if search button clicked - retuen message to enter city
   
//Create - 'append child'list body where Search results are?


// create the API call for 5 day forecast where it will display to 5-day section 



// add  event listener for the fetch button  

//event listener to search button click