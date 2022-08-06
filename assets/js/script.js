// Set API key
var APIkey = '8ae4d5b245e37bca05b9a458cedd88f1';
var city;

const btn = document.querySelector(".btn");
//const output = document.querySelector('.today-body');
//const url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=8ae4d5b245e37bca05b9a458cedd88f1";
//btn.onclick = () => {
    //fetch(url)
        //.then((res) => res.json())
        //.then((data) => {
            //addData(data);
            //console.log(data);
        //})
//};
//const btn = document.querySelector(".btn");

function getApi() {}
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=8ae4d5b245e37bca05b9a458cedd88f1';
    btn.onclick = () => {
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });
}

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