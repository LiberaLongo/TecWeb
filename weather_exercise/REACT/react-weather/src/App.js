import CitySelection from "./CitySelection";

// https://www.digitalocean.com/community/tutorials/how-to-customize-react-components-with-props

function App() {
  return (
    <div className="container-fluid animated-gradient py-5">
		<h1 className="title text-center mb-5">IWWA</h1>
		<h2 className="title text-center mb-5">Italian Worst Weather App</h2>
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<h3 className="title">Display one city</h3>
				<form id="city-form">
          			<div className="form-group mb-3">
					</div>
					<CitySelection></CitySelection>
				</form>
			</div>
		</div>
    </div>
  );
}

export default App;
