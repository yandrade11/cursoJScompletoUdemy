// IMPORTS
import React from 'react';
import './App.css';

// função que retorna JSX
export default function App() {
  //não é possível colocar mais de um elemento no return do JSX, mas você pode englobar tudo numa <div> ou <>.
  return (
    <>
      <h1>Hello world</h1>
      <p>Lorem impsum</p>
    </>
  );
}

// EXPORT (outra forma)
// export default App;
