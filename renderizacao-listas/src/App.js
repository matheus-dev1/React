import logo from './logo.svg';
import './App.css';
import RenderizacaoCondicionalPorElemento from './RenderizacaoCondicionalPorElemento.jsx'
import LoginControl from './LoginControl.jsx'
import Mailbox from './Mailbox.jsx'
import itensList from './itensList.jsx'
import Propriedades from './Propriedades.jsx'
import NumberList from './KeyList.jsx'

const messages = [1, 2, 3]
const numbers = [1, 2, 3, 4, 5]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RenderizacaoCondicionalPorElemento Verificacao={false}/>
        <LoginControl />
        <Mailbox unreadMessages={messages}/>
        <Propriedades />
        <ul>{itensList}</ul>
        <NumberList numbers={numbers}/>
        {/* Importamos os valores da lista e exibimos em uma tag <ul> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
