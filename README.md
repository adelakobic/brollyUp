# brollyUp
Weather retrieving website

## Description 📜
Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).


## Motivation 💪🏻
This project was created for travellers so that they can see the weather outlook for multiple cities and plan a trip accordingly. 

## Build status 🏗
* The starter code has been built by Adela Kobic

## Code style 🔐
* Standard HTML, CSS and vanilla JavaScript has been used for this project. 
The language for the website is written in US English. (USA English)

## Acceptance Criteria ✅
GIVEN a weather dashboard with form inputs
* WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
* WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
* WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
* WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
* WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

## Assets 📷
This image shows the weather application intended appearance and functionality. 
![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./assets/images/06-server-side-apis-homework-demo.png)
This image is a screenshot of final application. 
![Screenshot of the final application.](./assets/images/brollyscreen.png)

## Problems encountered 🤯
* geting the Search container to sit on the left side of the page, and everything else to sit on the right side of the page 4/8/22 - managed to adjust the widths for the containers to 25 and 70 for them to fit 4/8/22
* creating API key 5/8/22
* creating variables to begin the search input process and get it to print to the page 
* getting the 5-day weather block to sit underneath the Today's weather block 
* API call on the 5-day weather link is NOT working - it won't print to the console log even though the code is same format as the first main call. 8/8/22
* getting the data to save to local storage and THEN create a button to append after 11/8/22

## Changes made to the code 𝌡
* created the title and heading
* created the basic grid layout using Bootstrap - for the 5-day weather forecast section and search for a city
* adjusted the background colour for 5-day weather
* added cards for the Home weather section and the 5-day weather forecast
* GIT REVERT : back to commit dd980235652e11bc5a93f038a887596a1a62d3b3 - revert failed in Terminal having to delete code and try to revert back to where I was at 13:19 on 6/8/22
* created new JS doc (script2) to re code the API key
* git revert - had to AskBCS for support with this as the Git REvert video on canvas is out of date and wouldn't work for me
* search button now works and calls on the city weather 8/8/22 😃
* adjusted the padding on 5-day weather to centralise it better and ensure the text was even
* made the font smaller in 5-day section


## Link to the deployed website 💻
URL: https://adelakobic.github.io/brollyUp/ 

## Credits 💃🏻
* Picture credits as follows: 
    * Atlas Company (2022, August 2) Freepik.com <a href='https://www.freepik.com/photos/background'>Background photo created by atlascompany - www.freepik.com</a> Hero image has not been used as yet.
    * Bootcamp documentation (2022) <a href='https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys'> 

## Licence 🪪
* Licence not provided for this project