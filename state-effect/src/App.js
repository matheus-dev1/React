// eslint-disable-next-line

import React from 'react'
// Objeto React
import logo from './logo.svg';
//Importando imagem 2
import './App.css';
//Importando o arquivo .css

function App() {
  const firstName = "Matheus";
  //Criando uma constante com o nome firstName e valor "Matheus"
  const lastName = "Oliveira";
  //Criando uma constante com o nome lastNAme e valor "Oliveira"
  const element = <h1>Ola, {firstName} {lastName}</h1>;
  //Criando um elemento com a tag h1 e chamando as duas contantes para compor o elemento.

  // ----------------------------------------------------------------------------------------------------
  // STATE

  // O React.useState() me retorna uma Array com 2 indices;
  // [0] = Valor do estado;
  // [1] = Funcao de atualizacao de estado;
  let state = React.useState(0);
  // Hooks sao funcoes do objeto react(import React from 'react')
  // Obs: eu coloco o valor do primeiro parametro em 0 para que nao seja "undefined". Entao eu consigo alterar o valor do meu state.

  let stateValue = state[0];
  let setState = state[1]; // Sempre que eu tenho uma funcao atualizado de estado eu coloco em seu primeiro nome set. De "Setar", "Configurar", ou no nosso caso, "Atualizar".

  function SomaClickState() {
    setState(stateValue = stateValue + 1); // Mesma coisa que isso state[1](stateValue);
    // Por setState ser uma funcao ele temq ue ser escrito seu nome e parenteses
  }

  // --------------------------------------------------------------------------------------------------

  // UseState Desestruturado
  let [stateValue2, setState2] = React.useState(0);

  function SomaClickState2() {
    setState2(stateValue2 = stateValue2 + 1); // Mesma coisa que isso state[1](stateValue);
    // Por setState ser uma funcao ele temq ue ser escrito seu nome e parenteses
  }

  // --------------------------------------------------------------------------------------------

  let num = 0;
  function SomaClick() {
    console.log(num += num);
  }

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  const [gitHubNameValue, setGitHubName] = React.useState([]);
  // Como eu vou trabalhar com a funcao map para mapear todas as imagens da api do github eu tenho que colocar um array vazio ([]) para que eu possa adicionar em gitHubNameValue.
  // Como eu uso uma funcao assincrona no useEffect eu preciso de um array varios porque o map sera executa antes da funcao ter completado seu procesamento.
  
  // EFFECT
  React.useEffect(async () => {
    // Uso o React.useEffect e coloco a funcao de callback, neste caso a funcao esta com o async para poder consumir a api do github.
    const response = await fetch("https://api.github.com/users");
    setGitHubName(await response.json());
    // Eu seto todos os valores da api recebida.
    console.log(gitHubNameValue)
  }, []);
  // O segundo argumento e um array  de dependencias que recebe o valor do indice 0 de useState e serve para que quando este valor for alterad/atualizado o effect eh executado novamente.

  // Obs: Quando o React.useEffect() for utilizado apenas com a funcao de callback, ele eh executado sempre que o componente e renderizado ou atualizado.

  // Obs2: Quando o React.useEffect() for utilizado com a funcao de callback e um array vazio ([]) ele apenas sera executado na renderizacao inicial do componente (primeira vez que for renderizado)!

  // Obs3: Quando o Effect é utilizado com o callbak e um array de dependências, ele será executado sempre que o valor da dependência for atualizado e na primeira renderização do componente.

  // __________________________________________________________________________________________________

  function ClickBtn(event) {
    event.target.className = "btn btn-danger"
    event.target.innerText = "Danger"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
        {/*Chamando o elemento dentro da tag Header*/}

        <button className="btn btn-primary" onClick={SomaClickState}>Numero atua: {stateValue}</button>
        {/* <button className="btn btn-primary" onClick={SomaClick}>Numero atual {num}</button> */}
        {/* Quando eu coloco uma funcao em evento JavaScript e coloco os parentes, a funcao executa automaticamente, sem a necessidade de acionar o evento.*/}
        {/* Para passar um codigo JavaScript eu sempre uso as chaves. */}
        <button className="btn btn-primary" onClick={SomaClickState2}>Numero atua: {stateValue2}</button>
        <button className="btn btn-primary" onMouseOver={SomaClickState2}>Numero atua: {stateValue2}</button>
        <button className="btn btn-primary" onClick={ClickBtn}>Primary</button>
          {gitHubNameValue.map((element, index) => {
            // Cada objeto tem seu indice(key/chave) e nos precisamos indica-lo
            return (
              <img key={index} src={element.avatar_url}></img>
              // Indicacao do indice de cada objeto.
              // No indice eu tambem posso passar o element.id para classificar os indices.
            )
          })}
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
