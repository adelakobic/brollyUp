var tableBody = document.getElementById('cityB');

// Set API key
var APIkey = '8ae4d5b245e37bca05b9a458cedd88f1';
var city;

const btn = document.querySelector(".btn");
const output = document.querySelector('.card-body');
const url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=8ae4d5b245e37bca05b9a458cedd88f1";
btn.onclick = () => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            addData(data);
            console.log(data);
        })
};

// Get the API for today's weather - the next hour - 3 hours for today
function getAPI() {
    //fetch request to get a list of cities for the weather map - no3 lesson
    // enter city name in text box - should get info displayed in 'Home Weather' section AND '5-day forecast'
    var requestUrl='https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=8ae4d5b245e37bca05b9a458cedd88f1';
        fetch(requestUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function (data) {
            console.log(data)
            for (var i = 0; i++;) {
            
                // create elements to display data in '#hWeather' block to display today's weather
                var createTableRow = document.createElement('tr');// should it be a table display?
                var  tableData = document.createElement('td');
                var newBtn = document.createElement('button');
                // needs to be converted to buttons you can click

                //set the text of link and href of link
                link.textContent = data[i].html_url;
                link.href = data[i].html_url;

                // append the link to table data
                tableData.appendChild(link);
                createTableRow.appendChild(tableData);
                tableBody.appendChild(createTableRow);
            }
            })
    
}

// Search button input 
var searchFormEl = document.querySelector('#search-form');

function searchFormSubmit(event) {
    // fetch request for list of cities - web link?
    event.preventDefault();

    var searchInputVal= document.querySelector('#searchCity').value;
    // if search button clicked - retuen message to enter city
    if (!searchInputVal) {
        console.error('Must enter a city.');
        alert('Please enter a city 🌇');
        return;
    }
}

//Create - 'append child'list body where Search results are?
var cityList = document.getElementById('#cityB')


// create the API call for 5 day forecast where it will display to 5-day section 



// add  event listener for the fetch button  

//event listener to search button click