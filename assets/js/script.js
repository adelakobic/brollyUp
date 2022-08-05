// Search button input 
var searchFormEl = document.querySelector('#search-form');
function searchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal= document.querySelector('#searchCity').value;
    // if search button clicked - retuen message to enter city
    if (!searchInputVal) {
        console.error('Must enter a city.');
        alert('Please enter a city 🌇');
        return;
    }
// add query string to differentiate search results?
}
searchFormEl.addEventListener('submit', searchFormSubmit); //event listener to search button click

function getAPI() {
    //fetch request to get a list of cities for the weather map - no3 lesson
    var requestUrl='https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}';
        fetch(requestUrl)
            .then(function(response) {
                return response.json();
            })
            then(function (data) {
                
            })
    
}

// add fetchButton.addEventListener('click', getAPI);  //