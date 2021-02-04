import React from 'react';
//O React para entender codigo React
import ReactDOM from 'react-dom';
//React Dom para trabalhar com o DOM
import './index.css';
//Importando todo o CSS criado.
import App from './App';
//Todo o conteudo do nosso arquivo
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Bootstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//Renderizacao do codigo App.js

/*
function formatName(User) {
  return User.firstname + ' ' + User.lastname;
}

const User = {
  firstname: 'Matheus',
  lastname: 'Oliveira'
};

const element = (
  <h1>
    Hello, {formatName(User)}!
  </h1>
);
//Aqui eu estou passando o objeto User com o Array.

ReactDOM.render(element, document.getElementById('root'));
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
