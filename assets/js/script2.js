//let weather 
  // Set API key
  const APIkey = '8ae4d5b245e37bca05b9a458cedd88f1';

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
      console.log('I am in');
      var searchInputVal = document.querySelector('#searchCity').value;
      console.log('searchInputVal = ', searchInputVal);
      if (!searchInputVal) {
          console.error('Enter city please.')
          return;
      } 
      todayWeather(searchInputVal)
  }
function todayWeather(cityName){
  //var cityName = 'L';
  console.log("city name", cityName);
  // from: https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys 
  var searchForCity = 'https://api.openweathermap.org/data/2.5/weather?q=' 
  + cityName + "&units=metric&appid=" 
  + APIkey;
  console.log(searchForCity);  //first call in console comes from ^ this block 

  //from 'Build a weather App' vid
  //let weather = {
    //getWeather:function (cityName) {
        //fetch request to get city & API link
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' 
        + cityName + "&units=metric&appid=" 
        + this.APIkey
        )     // second call in console log comes from this ^ block 
        //btn.onclick = () => {
      
        //fetch(queryUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data)
          });
        }
      //}
    //}

        //   displayWeather; function(data) {
        //     const { name } = data;
        //     const { temp, humidity } = data.main[1];
        //     const { icon, description } = data.weather[0];
        //     const { speed } = data.wind[2];
        //     const { weather } = data.weather[0];
        //     console.log(name, temp, humidity, icon, description, speed, weather);
        //     document.querySelector(".city").innerText = "🏙 Weather in " + name;
        //     document.querySelector(".temp").innerText = "🌡 Temperature: " + temp + "°C";
        //     document.querySelector(".icon").src = "" + icon;
        //     document.querySelector(".humidity").innerText = "🫧 Humidity: " + humidity + "%";
        //     document.querySelector(".wind").innerText = "🌬 Wind speed: " + speed;
        //     document.querySelector(".description").innerText = "📻 Description: " + description;
        //  }
  
    

 // not working yet

