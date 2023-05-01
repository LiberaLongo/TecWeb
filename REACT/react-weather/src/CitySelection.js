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

	return (
		<div className="wrapper">
			<h2>Hai selezionato {city}!</h2>
			<select onChange={handleChange}>
				{cities.map(city => (
					<option>{city}</option>
				))}
			</select>
			<WeatherCard city={city}></WeatherCard>
		</div>
	);
}

export default CitySelection;
