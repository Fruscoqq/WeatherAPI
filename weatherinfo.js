class WeatherInfo {
  constructor() { }

  async getWeather(location) {
    const weatherResponse = await fetch(`http://api.weatherstack.com/current?access_key=4632e4e7c0e04285f0e0f32dc223f90e&query=${location}
    `);
    const weatherData = await weatherResponse.json();
    return weatherData;
  }
}

// https://api.apixu.com/v1/forecast.json?key=4632e4e7c0e04285f0e0f32dc223f90e&q=${location}&days=4