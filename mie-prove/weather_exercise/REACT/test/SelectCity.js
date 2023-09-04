import React, {useState} from 'react';
import Weather from './Weather';

function SelectCity() {

	const array = ["Milano", "Roma", "Bologna", "Palermo", "Napoli", "Torino", "Firenze"];	
	const [selectedCity, setSelectedCity] = useState(array[0]);

	function getNameElements() {
		const elements = [];
	
		array.forEach((city) => {
		elements.push(<option>{city}</option>);
		});
	
		return elements;
	}
  
	function handleInputChange(event) {
		setSelectedCity(event.target.value);
	}
	
	return (
		<div>
			<h2>Città selezionata {selectedCity}!</h2>
			<select value={props.selectedCity} onChange={props.onInputChange}>{getNameElements()}</select>
			<Weather city={selectedCity} onInputChange={handleInputChange}></Weather>
		</div>
	);
}
export default SelectCity;
