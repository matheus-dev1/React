//Obs: Caso voce crie um projeto que nao tenha os node_modules, voce pode baixar-los no node com o comendo
//npm install dentro da pasta do seu projeto.

import logo from './logo.svg';
//Para mudar a cor de uma imagem svg nos temos que alterar o codigo hexadecimal da propriedade "fill".
import './App.css';
import {Footer, Footer2, Footer3, Footer4} from './Footer.js';
import {Header, Header2} from './Headers.js';
import {FooterClass} from './FooterClass.js';
import {CursoHeader, CursoContent} from './Curso.js';
import {ClockClass} from './ClockClass.js';
import {Car} from './Color.js';
//Neste exemplo assim nos vemos que nos apenas injetamos Footer e Footer2 porem o nosso arquivo possui 3 
//funcoes, porem a gente apenas injetou estar no nosso arquivo.

function App() {
  //Como ela e uma funcao nativa e interresante deixar ela como funcao e nao mudar para clase.
  const elementName = <Footer4 name="Matheus" />;
  //Propriedade tem que ser a mesma passada no componente
  return (
    <div className="App">
        <header className="App-header">
        <Header />
        <Header2 />
        <ClockClass />
        {/*className e como se fosse a classe no html, por exempl o 'App' e um CSS no arquivo CSS.*/}
        <img src={logo} className="App-logo" alt="logo" />
        <CursoHeader header={"Curso de React.js"}/>
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
        <Car />
        <CursoContent title={"Tecnologias Aprendidas: "} content={"JavaScript, TypeScript, HTML, CSS \
        Python, Linux, MySQL, Boostrap, PHP e JQuery."}/>
        <CursoContent title={"Tecnologias Aprendidas 2: "} content={"Git e Servidores Web"}/>
        <Footer ano={2020}/>
        {/*Aqui estou estou chamando a funcao footer e passando para o parametro props.ano o valor 2020*/}
        <Footer2 dados={ {ano: 2020, mes: 12, dia: 19} }/>
        {/*Eu posso passar um Json tambem*/}
        <Footer3 />
        {/* Estou passando estas propriedade para props de FooterClass.js */}
        <FooterClass dados={ {ano: 2020, mes: 12, dia: 19} }/>
        {/*Temos que passar os parametros para o props do mesmo jeito sendo componente de classe. */}
        {elementName}
        </header>
    </div>
  );
}

export default App;
//Aqui nos exportamos todo o arquivo, diferente de exportar uma classe ou funcao unitariamente.
