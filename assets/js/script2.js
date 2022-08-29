
  // Set API key
  const APIkey = '8ae4d5b245e37bca05b9a458cedd88f1';
  //const APIkey = 'f23ee9deb4e1a7450f3157c44ed020e1'; second API
  //const APIkey = 'f2ed411effb9afab292f240ce7e371e0'; third API

  const btn = document.querySelector(".btn");  //DO NOT MESS

  var searchList = document.getElementById('cityB');

  // function getApi() {}
  //     // fetch request to get API link - this works - don't touch v this block - API KEY
  //     var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=8ae4d5b245e37bca05b9a458cedd88f1';
  //     btn.onclick = () => {
    
  //     fetch(requestUrl)
  //       .then(function (response) {
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         console.log(data)
  //       });
  // } // dont touch ^ this block

  //endpoint
  var endPoint = "https://api.openweathermap.org/data/2.5/onecall?";

  // city Search section - if not working API key - remove the var SearchFormEl
  var searchFormEl = document.querySelector('#city-search')
  searchFormEl.addEventListener('submit', citySearchSubmit)

  function citySearchSubmit(event) {
      event.preventDefault();
      console.log("Todays forecast");
      var searchInputVal = document.querySelector('#searchCity').value;
      console.log('searchInputVal = ', searchInputVal);
      if (!searchInputVal) {
          console.error('Enter city please.')
          return;
      } 
      todayWeather(searchInputVal)
  }
  function todayWeather(cityName){
    console.log("city name", cityName);
    // from: https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys 
    const searchForCity = 'https://api.openweathermap.org/data/2.5/weather?q=' 
    + cityName + "&units=metric&appid=" 
    + APIkey;
    console.log(searchForCity);  //first call in console comes from ^ this block 


    //fetch request to get city & API link
    fetch(searchForCity)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        displayWeather(data)
        console.log('check', data)
        forecastFiveDays(cityName)
        uvi(data.coord.lat, data.coord.lon)
      })
        // add search to a button - and save to local storage - search box 
      // .then(function(data) {
        
        // for (var i = 0; i <data.length; i++) {
        //   var listCity = document.createElement('button');
        //   listCity.textContent = data[i].html_url;
        //   searchList.appendChild(listCity);
        // }
      // })
        
      
  }

  function displayWeather(data) {
            console.log(data);
            const { name } = data;
            const { temp, humidity } = data.main;
            const { icon, description } = data.weather[0];
            const { speed } = data.wind;
            const { weather } = data.weather[0];
           console.log(name, temp, humidity, icon, description, speed, weather);
           document.querySelector(".city").innerText = "🏙 Weather in " + name;
           document.querySelector(".temp").innerText = "🌡 Temperature: " + temp + "°C";
           document.querySelector(".iconImage").src = `https://openweathermap.org/img/w/${icon}.png`;
           document.querySelector(".humidity").innerText = "🫧 Humidity: " + humidity + "%";
           document.querySelector(".wind").innerText = "🌬 Wind speed: " + speed;
           document.querySelector(".description").innerText = "📻 Description: " + description;

           // Set the item - stores in local storage
           var searchResults = $(this).parent().attr('id');
           var value = $(this).siblings('.destinationBtn').val();
           localStorage.setItem(searchResults, value);
           // retrieve items from storage 
           document.getElementsByClassName('.submit');
           localStorage.getItem(searchResults, value);
         }
  
  // call on the 5-day weather - from line 41
  function forecastFiveDays(cityName){
    const forecastForCity = 'https://api.openweathermap.org/data/2.5/forecast?q='
    + cityName + '&units=metric&appid='
    + APIkey;
    console.log('Check URL', forecastForCity);

    //fetch request for 5-day forecast
    fetch(forecastForCity)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log('new fetch',data)
        displayForecast1(data)
      });


  // card 1
    function displayForecast1(data) {
      console.log('Look at me!', data);
      // for loop gets the data day 1-5 then the const pulls the data from the array to put on the page
      for (let i= 1; i < 6; i++) {
        const icon = data.list[i].weather[0].icon;
        const temp = data.list[i].main.temp;
        const speed = data.list[i].wind.speed;
        const humidity = data.list[i].main.humidity;
        console.log(icon, temp, speed, humidity);
        document.querySelector(".icon" + i).src = `https://openweathermap.org/img/w/${icon}.png`;
        document.querySelector(".temp" + i).innerText = "🌡 Temp: " + temp + "°C";
        document.querySelector(".wind" + i).innerText = "🌬 Wind: " + speed;
        document.querySelector(".humid" + i).innerText = "🫧 Humidity:" + humidity + "%";
      }


    }

  }
// UVI section
  function uvi (lat, lon){
    let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIkey}`
    fetch(apiurl)
    .then(function(res){
      return res.json()
    })
    .then(function(data){
      console.log('One call', data)
    })
  }

  // save to local storage
var search = document.querySelector("#searchCity").value;
if (search === "") {
  alert("Search box cannot be blank.");
  localStorage.setItem("search", search);
} else {
  var newButton = document.createElement(newButton);
  newButton.textContent = "" + searchForCity;
  document.body.appendChild(newButton);
}