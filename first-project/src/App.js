// eslint-disable-next-line
import logo from './logo.svg';
//Importando imagem 1
import logo1 from './logo1.svg';
//Importando imagem 2
import './App.css';
//Importando o arquivo .css
import time from './time.js'
//Importando o arquivo .js do tempo.

/*
function Time() {
  return (
    <p> Sao exatamente {new Date().toLocaleString()}.</p>
  );
}
*/

function App() {
  const firstName = "Matheus";
  //Criando uma constante com o nome firstName e valor "Matheus"
  const lastName = "Oliveira";
  //Criando uma constante com o nome lastNAme e valor "Oliveira"
  const element = <h1>Ola, {firstName} {lastName}</h1>;
  //Criando um elemento com a tag h1 e chamando as duas contantes para compor o elemento.
  const dateTime = time();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        {element}
        {dateTime}
        {/*Chamando o elemento dentro da tag Header*/}
        <p>
          Edit <code>src/App.js</code> and save to reload. | <code>Matheus Oliveira</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
