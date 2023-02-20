const searchForm =  $('#search-form')
const searchInput = $('#search-input');
const resultsWrapper = document.querySelector('main');
const cardWrapper = document.querySelector('#forecast-list');


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
    //Show Current Forecast
    //Show 5 day Forecast
    DisplayWeatherForecast(city);
}

function DisplayWeatherForecast(city) {
    
}

function init() {
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
        //Once a city has been inputted fetch weather info and 
        fetchWeatherInfo();
        }
    });
}
  


init();