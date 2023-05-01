import React, {useState, useEffect} from 'react';

//parent
function CityWeather() { 
	const [city, setCity] = useState("Bologna");
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

	const fetchWeather = (city) => {		
		var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=it&units=metric&appid=${apiKey}`;
		fetch(url)
		.then(response => response.json())
		  .then(data => setWeatherData(data));
	}

	function handleInputChange(event) {
		setCity(event.target.value);
		fetchWeather(city);
	}

	useEffect(() => {
		fetchWeather(city)
	}, [fetchWeather]);

	return (
		<div>
			<div class='card'>
				<div class='card-header'>
					{city}
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
			<h2>Città selezionata {city}!</h2>
			<SelectCity name={city} onInputChange={handleInputChange} />
		</div>
	);
}

//child
function SelectCity(props) {
	return (
		<div>
			<label htmlFor="name-input">Inserisci la città:</label>
			<input id="name-input" type="text" value={props.name} onChange={props.onInputChange} />
		</div>
	);
}
  
export default CityWeather;