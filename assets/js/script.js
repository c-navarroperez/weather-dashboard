const searchForm =  $('#search-form')
const searchInput = $('#search-input');
const resultsWrapper = $('main');
const todayWeatherWrapper = $('#today');
const forecastWrapper = $('#forecast');
const forecastCardContainer = $('#forecast-list');


function searchHistory() {
    //Add city name to search history
    //  - Get previous searches from localStorage
    //  - If inputted city has not been stored to search history in localStorage, push the city name
    //  - Set the search history to localStorage
    //   2. Show search history
    //     - Pull search history from localStorage
    //     - If search history is not empty, output each city to the search history display in the DOM
}

function fetchWeatherInfo(city) {

    /*
    Use OpenWeather API to retrieve weather data
    */

    //Display Forecast
    DisplayWeatherForecast(city);
}

function DisplayWeatherForecast(city) {
    let date = '04/01/2023';
    let temp = '20C';
    let wind = '4 mph';
    let humidity = '77%';

    //Show Current Forecast
    $(todayWeatherWrapper).show();
    
    $( `<h2 class="heading radius">${city} ${date} -icon-</h2>
        <p>Temp: ${temp}</p>
        <p>Wind: ${wind}</p>
        <p>Humidity: ${humidity}</p>`
    ).appendTo(todayWeatherWrapper);

     //Show 5 day Forecast
    $(forecastWrapper).show();

    for (i = 0; i < 5; i++) {
        date = `0${5+i}/01/2023`;
        temp = '20C';
        wind = `${3*i} mph`;
        humidity = '77%';
        $(`<div class="forecast-card radius">
                <h3>${date}</h3>
                <p>-icon-</p>
                <p>Temp: ${temp}</p>
                <p>Wind: ${wind}</p>
                <p>Humidity: ${humidity}</p>
            </div>
        `).appendTo(forecastCardContainer);
    }
}

function init() {
    $(todayWeatherWrapper).hide();
    $(forecastWrapper).hide();

    // When search button is clicked 
    searchForm.submit((event) => {
        event.preventDefault();
        // Check that the imput is not a space or an empty string
        inputText = searchInput.val();
        if (inputText === ' ' || inputText ===  '') {
            alert("Please input a City name.");
            searchInput.val('');
        }
        else {
        // Once a city has been inputted fetch weather info 
        fetchWeatherInfo(inputText);
        // // remove searched city from search field
        searchInput.val('');
        }
    });
}
  

init();