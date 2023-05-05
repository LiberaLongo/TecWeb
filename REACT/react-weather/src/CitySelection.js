import React, {useState} from 'react';

import cities from './components/data';
import WeatherCard from './WeatherCard';

function CitySelection() {
	const [selectedCity, setSelection] = useState(cities[0]);
	const [all, setAll] = useState(false);
	const [city, setCity] = useState("");
	
	function handleChange(event) {
		setSelection( event.target.value );
		//console.log(selectedCity);
	}

	function submitCity(event) {
		event.preventDefault();
		setCity(selectedCity);
		setAll(false);
		//console.log(selectedCity);
	}

	function giveMeAll(event) {
		event.preventDefault();
		setAll(true);
		//console.log(selectedCity);
	}

	return (
		<div className="wrapper">
			<h2>Hai selezionato {city}!</h2>
			<select id="city-select" className="form-select" onChange={handleChange}>
				{cities.map((elem, index) => (
					<option key={index} >{elem}</option>
				))}
			</select>
			<button type="submit" id="display-city" className="btn btn-primary"
				onClick={submitCity}>Display</button>
			<button id="display-all" className="btn btn-secondary"
				onClick={giveMeAll}>All</button>
			<div id="weather-cards" className="col-md-12 d-flex justify-content-center">
				{all ?
					cities.map((elem, index) => {
						return <WeatherCard key={index} city={ elem }></WeatherCard>
					})
					:
					<WeatherCard city={ city }></WeatherCard>
				}
    		</div>
		</div>
	);
}

export default CitySelection;
