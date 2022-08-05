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
// add query string to differentiate search results

}

searchFormEl.addEventListener('submit', searchFormSubmit);