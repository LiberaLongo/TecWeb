import React, { useState } from 'react';
//ParentComponent utilizza al suo interno ChildComponent, a cui passa una prop name e una funzione onInputChange
function ParentComponent() {
  const [name, setName] = useState("");

/*
In generale, il nome della variabile iniziale 
viene scritto in camel case, come name, mentre 
il nome della funzione di aggiornamento dello stato 
viene creato concatenando "set" al nome della variabile, 
in Pascal case, come setName.
*/

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <h2>Ciao, {name}!</h2>
      <ChildComponent name={name} onInputChange={handleInputChange} />
    </div>
  );
}

/*
Ogni volta che l'utente inserisce un valore nell'input, 
la funzione handleInputChange viene chiamata.
Questa funzione aggiorna il valore della variabile di stato 
name utilizzando la funzione setName.

=====> setName(event.target.value); 

Dato che la funzione handleInputChange viene passata 
a ChildComponent come prop ed è stata dichiarata nel 
parent component, la funzione potrà modificare il valore 
della variabile di stato name, anche se interagisce col child component.

A sua volta, il ParentComponent aggiorna il valore della variabile in 
base alla callback
*/

function ChildComponent(props) {
  return (
    <div>
      <label htmlFor="name-input">Inserisci il tuo nome:</label>
      <input id="name-input" type="text" value={props.name} onChange={props.onInputChange} />
    </div>
  );
}

export default ParentComponent;