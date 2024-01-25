// IMPORTS
import Main from './components/Main';

//desde o react v17 não é mais necessário a importação explícita
import React from 'react';
import './App.css';

// COMPONENTE STATELESS (função sem estado): retorna JSX
export default function App() {
  //não é possível colocar mais de um elemento no return do JSX
  //mas você pode englobá-las em qualquer outra tag (div por exemplo)
  return (
    //TAG DE FRAGMENTS: <> </>
    // <>
    //   <h1>Hello world</h1>
    //   <p>Lorem impsum</p>
    // </>

    <Main />
  );
}

// EXPORT (outra forma)
// export default App;
