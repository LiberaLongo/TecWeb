const apiKey = "259881c5cff7deffe72b428f74ef44a0"; //metti qui la tua chiave
const citySelect = document.getElementById("city-select");
const weatherCards = document.getElementById("weather-cards"); //div to fill with weather cards
const form = document.getElementById("city-form"); //form to get the city
// const cities = ["Milano", "Roma", "Bologna", "Palermo", "Napoli", "Torino", "Firenze"];
//for the home exercise using Promise.all

function clearWeatherCards() {
  weatherCards.innerHTML = '';
  //removes the weather cards from the div
}

function getWeather(selectedCity, apiKey) {
  clearWeatherCards()
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
  //completa la funzione

  async function getData() {
	  try {
		  const response = await fetch(url);
		  const data = await response.json();
		  console.log(data);
		  //prepare the output
		  weatherCards.innerHTML = `
			<div class='card'>
				<div class='card-header'>
					${data.name}</div>
				<div class='card-body'>
					<img class='card-img'
						src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'
						alt='image of ${data.weather[0].description}'></img>
					<div class='card-text'>
						weather:
						<ul>
							<li>main: ${data.weather[0].main}</li>
							<li>description: ${data.weather[0].description}</li>
						<ul>
					</div>
				</div>
			</div>`;
			//done output preparation
	  } catch (error) {
		  console.error(error);
	  }
  }
  getData();

}

//oppure: 
// async function getWeather(selectedCity, apiKey) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
//   riempi se vuoi usare invece async await
//}

form.addEventListener("submit", event => {
  event.preventDefault(); // prevents form from refreshing page
  const selectedCity = document.getElementById("city-select").value;
  getWeather(selectedCity, apiKey);
});

