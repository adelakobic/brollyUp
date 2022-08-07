// Set API key
const APIkey = '8ae4d5b245e37bca05b9a458cedd88f1';

const btn = document.querySelector(".btn");  //DO NOT MESS

function getApi() {}
    // fetch request to get API link - this works - don't touch
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=8ae4d5b245e37bca05b9a458cedd88f1';
    btn.onclick = () => {
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        addData(data);
        console.log(data)
      });
  
} // dont touch ^ this block