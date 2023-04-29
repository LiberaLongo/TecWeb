import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Contatore di clic: {count}</h2>
      <button onClick={handleClick}>Clicca qui</button>
    </div>
  );
}

export default Counter;