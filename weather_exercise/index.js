const apiKey = "259881c5cff7deffe72b428f74ef44a0"; //metti qui la tua chiave
const citySelect = document.getElementById("city-select");
const weatherCards = document.getElementById("weather-cards"); //div to fill with weather cards
const form = document.getElementById("city-form"); //form to get the city

//for the home exercise using Promise.all
const cities = ["Milano", "Roma", "Bologna", "Palermo", "Napoli", "Torino", "Firenze"];
const paralleloPromesse = document.getElementById("all-cities-sync");
const sequenzaPromesse = document.getElementById("all-cities");
/*
//to prepare the form options as the cities in the index.js (done before seeing the .zip)
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
  $('#form').html(formHTML);}
*/


function clearWeatherCards() {
  weatherCards.innerHTML = '';
  //removes the weather cards from the div
}

//funzioni ausiliarie aggiunte da LLibera
function getCardHTML(data) {
  return `<div class='card'>
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
  </div>`
}

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    //prepare the output
    weatherCards.innerHTML = getCardHTML(data);
    //done output preparation
  } catch (error) {
    console.error(error);
  }
}
//fine funzioni ausiliarie aggiunte da LLibera

function getWeather(selectedCity, apiKey) {
  clearWeatherCards()
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&lang=it&units=metric&appid=${apiKey}`;
  //completa la funzione
  getData(url);
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







//funzioni aggiuntive (LLibera) per le promesse
function getPromise(index) {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cities[index]}&lang=it&units=metric&appid=${apiKey}`;
  return fetch(url);
}
//fine funzioni aggiuntive (LLibera) per le promesse

//all cities 'sync' ovvero con Promise All (ovvero in parallelo)
paralleloPromesse.addEventListener('click', event => {
    event.preventDefault();
    //console.log('parallelo: Promise.all([...])');
    clearWeatherCards()
    let promesse = [];
    for(let i = 0; i < cities.length; i++) {
      promesse[i] = getPromise(i);
    }
    Promise.all(promesse)
      .then(async function(arrayDiRisultati){
          //prepare the output
          let output = "<div class='card-group'>";
          for(let i = 0; i < arrayDiRisultati.length; i++) {
            let data = await arrayDiRisultati[i].json();
            //console.log(data);
            output += getCardHTML(data);
          }
          output += "</div>";
          weatherCards.innerHTML = output;
      })
      .catch(errore => {console.error(errore)});
  });

//all cities sequenzialemnte (senza Promise all)
sequenzaPromesse.addEventListener('click', event => {
    event.preventDefault();
    //console.log('funzione non ancora implementata');
  });

