//ENTRY POINT (aqui starta o projeto)

//IMPORTS
//OBS: sempre que você for utilizar .jsx, você precisa importar o react, mesmo que não vá utilizar aqui
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// antigamente (epoca da aula) você podia renderizar diretamente com ReactDOM.render passando classe/função APP e rota como argumento
const root = ReactDOM.createRoot(document.getElementById("root"));

// hoje em dia, você cria uma variável root (que é a rota) e depois renderiza a variável passando classe/função APP e rota como argumento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
