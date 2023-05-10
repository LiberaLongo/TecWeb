import React, {useState} from 'react';

function ParentComponent() { 
	const [name, setName] = useState("Libera");
  
	function handleInputChange(event) {
	  setName(event.target.value);
	}
  
	return (
	  <div>
		<h2>Città selezionata {name}!</h2>
		<ChildComponent name={name} onInputChange={handleInputChange} />
	  </div>
	);
  }
    
  function ChildComponent(props) {
	return (
		<div>
			<label htmlFor="name-input">Inserisci la città:</label>
			<input id="name-input" type="text" value={props.name} onChange={props.onInputChange} />
		</div>
	);
  }
  
  export default ParentComponent;
