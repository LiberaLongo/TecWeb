import React, {useState, useEffect} from 'react';

function Weather(selectedCity) {
	const apiKey = "259881c5cff7deffe72b428f74ef44a0";
	var url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
	const [weatherData, setWeatherData] = useState({});

	var weatherMain, weatherIcon, weatherDescription, weatherIconPng;
  
	function setWeatherData(data) {
	  	//operatori ternari
	  	weatherMain = data.weather ? data.weather[0].main : '';
		weatherIcon = data.weather ? data.weather[0].icon : '';
		weatherDescription = data.weather ? data.weather[0].description : '';

		//png
		weatherIconPng = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

		//json
		weatherData = {
			"city" : {selectedCity},
			"main" : {weatherMain},
			"icon" : {weatherIcon},
			"description" : {weatherDescription}
		};
	}

	useEffect(() => {
		fetch(url)
		.then(response => response.json())
		  .then(data => setWeatherData(data));
	  }, []);
  
	return (
		<div class='card'>
			<div class='card-header'>
				${selectedCity}
			</div>
			<div class='card-body'>
				<img class='card-img'
					src={weatherIconPng}
					alt='image of weatherDescription'></img>
				<div class='card-text'>
					weather:
					<ul>
						<li>main: ${weatherMain}</li>
						<li>description: ${weatherDescription}</li>
					</ul>
				</div>
			</div>
		</div>
	);
  }
  
  export default Weather;