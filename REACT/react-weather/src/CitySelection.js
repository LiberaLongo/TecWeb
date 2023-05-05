import React, {useState} from 'react';

import cities from './components/data';
import WeatherCard from './WeatherCard';

function CitySelection() {
	var selectedCity = cities[0];
	var all = false;
	const [city, setCity] = useState("");
	
	function handleChange(event) {
		selectedCity = event.target.value;
	}

	function submitCity(event) {
		event.preventDefault();
		setCity(selectedCity)
	}

	function giveMeAll(event) {
		all = true;
	}

	return (
		<div className="wrapper">
			<h2>Hai selezionato {city}!</h2>
			<select id="city-select" class="form-select" onChange={handleChange}>
				{cities.map(city => (
					<option>{city}</option>
				))}
			</select>
			<button type="submit" id="display-city" class="btn btn-primary"
				onClick={submitCity}>Display</button>
			<button id="display-all" class="btn btn-secondary"
				onClick={giveMeAll}>All</button>
			{all === true ?
				cities.map(city_index => {
					<WeatherCard city={ city_index }></WeatherCard>
				})
				:
				<WeatherCard city={ city }></WeatherCard>
			}
		</div>
	);
}

export default CitySelection;
