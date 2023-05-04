import CitySelection from "./CitySelection";

// https://www.digitalocean.com/community/tutorials/how-to-customize-react-components-with-props

function App() {
  return (
    <div class="container-fluid animated-gradient py-5">
		<h1 class="title text-center mb-5">IWWA</h1>
		<h2 class="title text-center mb-5">Italian Worst Weather App</h2>
		<div class="row">
			<div class="col-md-6 offset-md-3">
				<h3 class="title">Display one city</h3>
				<form id="city-form">
          			<div class="form-group mb-3">
					</div>
					<CitySelection></CitySelection>
				</form>
			</div>
		</div>
    </div>
  );
}

export default App;
