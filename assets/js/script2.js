
  // Set API key
  const APIkey = '8ae4d5b245e37bca05b9a458cedd88f1';
  //const APIkey = 'f23ee9deb4e1a7450f3157c44ed020e1'; second API
  //const APIkey = 'f2ed411effb9afab292f240ce7e371e0'; third API

  const btn = document.querySelector(".btn");  //DO NOT MESS

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
      });
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
         }
  
  // call on the 5-day weather - from line 41
  function forecastFiveDays(cityName){
    const forecastForCity = 'https://api.openweathermap.org/data/2.5/forecast?q='
    + cityName + '&units=metric&appid='
    + APIkey;
    console.log(forecastForCity);

    //fetch request for 5-day forecast
    fetch(forecastForCity)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data)
        displayForecast1(data)
      });


  // card 1
    function displayForecast1(data) {
      console.log(data);
      const { icon} = data.weather[0];
      const { temp } = data.main;
      const { speed } = data.wind;
      const { humidity } = data.main;
      console.log(icon, temp, speed, humidity);
      document.querySelector(".icon1").src = `https://openweathermap.org/img/w/${icon}.png`;
      document.querySelector(".temp1").innerText = "🌡 Temp: " + temp + "°C";
      document.querySelector(".wind1").innerText = "🌬 Wind: " + speed;
      document.querySelector(".humid1").innerText = "🫧 Humidity:" + humidity + "%";
    }

  }// not working yet