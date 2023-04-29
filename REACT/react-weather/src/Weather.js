//this is a card only and city isn't selectable...
//that mean i keep this but that is no more used probably!

import React, {useState, useEffect} from 'react';

function Weather(props) {
	var selectedCity = props.selectedCity; //i cannot change this then look at WeatherCard component!
	const apiKey = "259881c5cff7deffe72b428f74ef44a0";
	const [weatherData, setWeatherData] = useState({});

	//operatori ternari
	var weatherMain = weatherData.weather ? weatherData.weather[0].main : '';
	var weatherIcon = weatherData.weather ? weatherData.weather[0].icon : '';
	var weatherDescription = weatherData.weather ? weatherData.weather[0].description : '';
	var temperature = weatherData.main ? weatherData.main.temp : '';
	var temperatureMax = weatherData.main ? weatherData.main.temp_max : '';
	var temperatureMin = weatherData.main ? weatherData.main.temp_min : '';

	//png
	var weatherIconPng = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

	useEffect(() => {
		var url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
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
					alt={weatherDescription}></img>
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