// Variables
const button = document.querySelector('.btn'),
  input = document.querySelector('.search');

// Init objects
const weatherInfo = new WeatherInfo();
const ui = new UI();


// Fetching data button
button.addEventListener('click', function (e) {
  ui.buttonAnimation();
  if (input.value != '') {
    console.log(1)
    ui.weatherLoader();
    weatherInfo.getWeather(input.value).then(data => {
      console.log(data)

      let output = `
      <ul class="list">
    <li>Location: ${data.location.name} <img src="${data.current.weather_icons[0]}"/></li>
    <li>Temperature: ${data.current.temperature}°C</li>
    <li>Humidity: ${data.current.humidity}%</li>
    <li>Condition: ${data.current.weather_descriptions}</li>
  </ul>
      `;
      document.querySelector('#output').innerHTML = output;
    });
    input.value = '';
  } else {
    console.log(2)
  }
})