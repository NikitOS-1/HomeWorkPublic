document.addEventListener("DOMContentLoaded", function () {
  const cityNameElement = document.getElementById("city-name");
  const temperatureElement = document.getElementById("temperature");
  const pressureElement = document.getElementById("pressure");
  const descriptionElement = document.getElementById("description");
  const humidityElement = document.getElementById("humidity");
  const windSpeedElement = document.getElementById("wind-speed");
  const windDirectionElement = document.getElementById("wind-direction");
  const weatherIconElement = document.getElementById("weather-icon");
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");

  getWeatherBtn.addEventListener("click", function () {
    const cityName = cityInput.value.trim();
    if (cityName !== "") {
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
      getWeatherData(apiUrl);
    } else {
      alert("Будь ласка, введіть назву міста.");
    }
  });

  function getWeatherData(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          const data = JSON.parse(xhr.responseText);
          displayWeatherData(data);
        } else {
          alert("Помилка отримання даних про погоду.");
        }
      }
    };
    xhr.send();
  }

  function displayWeatherData(data) {
    cityNameElement.textContent = data.name;
    temperatureElement.textContent = data.main.temp;
    pressureElement.textContent = data.main.pressure;
    descriptionElement.textContent = data.weather[0].description;
    humidityElement.textContent = data.main.humidity;
    windSpeedElement.textContent = data.wind.speed;
    windDirectionElement.textContent = data.wind.deg;
    weatherIconElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  }
});
