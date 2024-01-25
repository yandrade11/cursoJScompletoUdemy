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

// function App() {
//   return (
//     //não é HTML, é JSX
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Hello World!
//         </p>
//       </header>
//     </div>
//   );
// }

// EXPORT
// export default App;
