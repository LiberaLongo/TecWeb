import React, {useState, useEffect} from 'react';

function Weather() {
	var selectedCity = "Milan"
	const apiKey = "259881c5cff7deffe72b428f74ef44a0";
	var url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
	var [weatherData, setWeatherData] = useState({});

	var weatherMain, weatherIcon, weatherDescription, weatherIconPng;
	var temperature, temperatureMax, temperatureMin;

	//operatori ternari
	weatherMain = weatherData.weather ? weatherData.weather[0].main : '';
	weatherIcon = weatherData.weather ? weatherData.weather[0].icon : '';
	weatherDescription = weatherData.weather ? weatherData.weather[0].description : '';
	temperature = weatherData.main ? weatherData.main.temp : '';
	temperatureMax = weatherData.main ? weatherData.main.temp_max : '';
	temperatureMin = weatherData.main ? weatherData.main.temp_min : '';

	//png
	weatherIconPng = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

	useEffect(() => {
		fetch(url)
		.then(response => response.json())
		  .then(data => setWeatherData(data));
	  }, []);
  
	return (
		<div class='card'>
			<div class='card-header'>
				{selectedCity}
			</div>
			<div class='card-body'>
				<img class='card-img'
					src={weatherIconPng}
					alt='image of weatherDescription'></img>
				<div class='card-text'>
					weather:
					<ul>
						<li>main: {weatherMain}</li>
						<li>description: {weatherDescription}</li>
					</ul>
					temperatura: 
					<ul>
						<li>ora: {temperature} &deg;C</li>
						<li>massima: {temperatureMax} &deg;C</li>
						<li>minima: {temperatureMin} &deg;C</li>
					</ul>
				</div>
			</div>
		</div>
	);
  }
  
  export default Weather;