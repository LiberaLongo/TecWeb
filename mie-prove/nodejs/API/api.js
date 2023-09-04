//https://site212248.tw.cs.unibo.it/exercises/ex17

const apiKey = "259881c5cff7deffe72b428f74ef44a0";
const cities = ["Milano", "Bologna", "Cattolica", "Pian di Balestra", "Roma", "Palermo"];

let formHTML = `<div class="form-group">
				<label for="city">Select City</label>
				<select class="form-control" id="city">`;
jQuery.each( cities, function( index, city ) {
	formHTML += `<option>${city}</option>`;
	//console.log(city);
});
formHTML += `</select></div>
<button type="submit" class="btn btn-primary" value='Go!'>Submit</button>`;

$(document).ready(loadDOM);

function loadDOM() {
	$('#form').html(formHTML);
}

function doForm() {
	const select = document.querySelector('#city');
	const city = select.value;
	//console.log(city);
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

	async function getData() {
		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			console.log(data);
			//prepare the output
			$('#output').html(`
		<div class='card'>
			<div class='card-header'>
				${data.name}</div>
			<div class='card-body'>
				<img class='card-img'
					src='${data.weather[0].icon}'
					alt='${data.weather[0].description}'>
				</img>
				<div class='card-text'>
					${data.weather[0].description}
				</div>
			</div>
		</div>
			`);
		} catch (error) {
			console.error(error);
		}
	}
	getData();
	
	//prevent default form submit
	return false;
}

