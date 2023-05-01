import data from './components/data';
import WeatherCard from './WeatherCard';

// https://www.digitalocean.com/community/tutorials/how-to-customize-react-components-with-props

function App() {
  return (
    <div className="wrapper">
      <h1>Weather of more Cities</h1>
      {data.map(array_of_cities => (
        <WeatherCard key={array_of_cities.name} city={array_of_cities.name}></WeatherCard>
      ))}
    </div>
  );
}

export default App;
