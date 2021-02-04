//Dependencias e Bibliotecas.
import React from 'react';
import ReactDOM from 'react-dom';

//Componentes.
import App from './Components/App';
//Eu nao preciso colocar o index.jsx porque colo que esta como onome index ele ja acessa este arquivo.

//Normalmente nos criamos tambem uma estrutura de pastas, sendo a pasta de components a pasta onde possui todos os nosso components da aplicacao, e dentro desta passa cada componente tera uma pasta.

//Estilizacao.
import './global.css';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
  //O <React.StrictMode> serve parar dar mais alguns Warnings importantes na hora de desenvolvimento, porem na producao nao precisa.
);
