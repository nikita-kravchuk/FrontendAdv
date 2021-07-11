// 1. DOM navigation
// 2. Event initialization
// 3. Make HTTp request
// 4. Handle error
// 5. Display data

function getElement(id) {
  return document.getElementById(id);
}

var humidity = document.getElementById("current-humidity"),
  pressure = document.getElementById("current-pressure"),
  temperature = document.getElementById("current-temperature"),
  windSpeed = document.getElementById("current-wind-speed"),
  getWeatherButton = document.getElementById("get-weather"),
  weatherSummary = document.getElementById("weather-summary"),
  weatherList = document.getElementById("weather-item-list"),
  loader = document.getElementById("loader"),
  cityHumidity = document.getElementById("city-current-humidity"),
  cityPressure = document.getElementById("city-current-pressure"),
  cityTemperature = document.getElementById("city-current-temperature"),
  cityWindSpeed = document.getElementById("city-current-wind-speed"),
  getCityWeather = document.getElementById("get-city-weather"),
  inputCity = document.getElementById("input-city");

function getWeatherByCoordinates() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      getWeatherData(position.coords.latitude, position.coords.longitude);
    });
  } else {
    return alert("Could not get current location");
  }
}

function getWeatherData(latitude, longitude) {
  loading();
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      "acb900ecada3ce6e66d45d680e02969e" +
      "&units=" +
      "metric"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayData(data);
      done();
    })
    .catch(function (error) {
      console.error(error);
    });
}

function displayData(data) {
  temperature.innerHTML = "Temperature: " + data.main.temp + "℃";
  humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
  pressure.innerHTML = "Pressure: " + data.main.pressure + " mb";
  windSpeed.innerHTML = "Wind Speed: " + data.wind.speed + " km/h";
  weatherSummary.innerHTML = "Your location " + data.name + " and sky is " + data.weather[0].main;
  console.log(data);
}

function loading() {
  weatherList.style.opacity = 0;
  loader.style.opacity = 1;
}

function done() {
  weatherList.style.opacity = 1;
  loader.style.opacity = 0;
}

getWeatherButton.addEventListener("click", getWeatherByCoordinates);

function getWeather(city) {
    var city = document.getElementById("input-city").value;
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        "acb900ecada3ce6e66d45d680e02969e" +
        "&units=" +
        "metric"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        displayCityData(data);
        console.log(this)
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function displayCityData(data) {
    cityTemperature.innerHTML = "Temperature: " + data.main.temp + "℃";
    cityHumidity.innerHTML = "Humidity: " + data.main.humidity + "%";
    cityPressure.innerHTML = "Pressure: " + data.main.pressure + " mb";
    cityWindSpeed.innerHTML = "Wind Speed: " + data.wind.speed + " km/h";
    city.innerHTML = document.getElementById("input-city").value;
    console.log(data);
  }

  getCityWeather.addEventListener("click", getWeather);