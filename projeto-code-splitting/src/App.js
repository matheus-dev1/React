import logo from './logo.svg';
import spin from './spin.jpg'
import './App.css';
import fallback from './fallback'

// import Rodape from './Rodape'
// import Slogan from './Slogan'

// O lazy-loading modifica a maneira em que a gente faz o import dos nosso componentes.

// Com o Lazy Loading, o processamento deve ocorrer de forma assíncrona, ou seja, sem sincronismo, sendo renderizado apenas quando necessário, se for necessário. Por isso, o Lazy Loading atua principalmente na importação dos arquivos. Sua função analisa se o componente é necessário no projeto e o carrega apenas quando for preciso.

// O que o Lazy Loading faz no código é suspender o carregamento do componente para avaliar quando e se precisa carregá-lo.

// Porém, precisamos avisar ao React quais são os componentes que estão suspensos, para que ele possa ter um componente substituto ou "reserva" enquanto o componente titular não é carregado.

// Para que o React possa renderizar o aplicativo, todos os componentes precisam estar presentes, sejam os componentes titulares ou seus reservas/substitutos.

// A ideia e voce renderizar algo simples, para nao ficar um tela no vacuo e enquanto isso no background o verdadeiro componente complexo e maior esta sendo carregado.
import { lazy, Suspense } from 'react';

// Aqui eu estou importando um componente atraves do lazy-loading, entao pra usa-los eu preciso do componente <Suspence /> com a propriedade fallback.
const Slogan = lazy(() => import('./Slogan'))
const Rodape = lazy(() => import('./Rodape'))
// Obs: Para ver como funciona nos podemos reduzir a velocidade de carregamento da pagina indo nas ferramentas do desenvolverdor do seu navegador e ir em network e onde "Online" colo em "Slow 3g"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* A propriedade fallback={} eh obrigatoria e precisa de um componente ou tag. */}
          <Suspense fallback={<img src='https://pa1.narvii.com/6898/0942d25fd0bc260c51d360ed1a328df5e57e1b5cr1-320-231_00.gif' />}>
            <Slogan />
          </Suspense>

          <Suspense fallback={<img src={logo} className="App-logo" alt="logo"></img>}>
            <Rodape />
          </Suspense>
      </header>
    </div>
  );
}

export default App;
