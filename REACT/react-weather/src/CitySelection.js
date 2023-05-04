import React, {useState} from 'react';

import cities from './components/data';
import WeatherCard from './WeatherCard';

function CitySelection() {
	const [city, setCity] = useState(cities[0]);
	
	function handleChange(event) {
		var selectedCity = event.target.value;
		//console.log(selectedCity);
		setCity(selectedCity);
	}

	function handleSubmit(event) {
		event.preventDefault();
		<WeatherCard city={city}></WeatherCard>
	}

	return (
		<div className="wrapper">
			<h2>Hai selezionato {city}!</h2>
			<select id="city-select" class="form-select" onChange={handleChange}>
				{cities.map(city => (
					<option>{city}</option>
				))}
			</select>
			<button type='submit' id="display-button" class="btn btn-primary" onclick={handleSubmit}>Display</button>
		</div>
	);
}

export default CitySelection;
