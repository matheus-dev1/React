// "code ."" (abre o Visual Studio code no terminal na pasta atual. )
// E podemos abrir o "git bash" no terminal do Visual Studio.

// Boa pratica eh renomear a extensao dos meus arquivos .js para .jsx 

// import React from 'react';
// import './styles.css'

// function App () {
//   return (
//     O return nao aceita elementos irmaos sendo retornado!!!
//     <React.Fragment>
//       <h1 className="App" style={{color: "red"}}>Ola mundo</h1>
//       {/* Se eu for usar CSS inline no React eu tenho que usar JavaScript pra isso. */}
//     </React.Fragment>
//     Nos usamos o React.Fragment (que pode ser usado assim tambem: <> </>) como se fosse uma "div invissivel", porque se nao a gente tem que usar a div ou o React.Fragment.
    
//     React.createElement("h2", null, "React.createElement")
//     Ou eu uso cogigo JSX ou React Puro.

//     Aqui estamos crriando um ELEMENTO no nosso COMPONENTE.
//     O primeiro parametro de React.createElement() e tag HTMl.
//     O segundo parametro de React.createElement() e as propiedades exemplo: id="nome" mas tambem pode ser null.
//     O terceiro parametro de React.creatEelement() e o conteudo da nossa tag, podendo ser uma string, ou outra tag.

//     React.createElement(
//       'div', 
//       null, 
//       React.createElement(
//         'b', 
//         null, 
//       React.createElement(
//         'p',
//         {nome: "name"},
//         "Matheus")
//       )
//     )

// );
// }

// export default App

// o npm run build serve pra gente criar um arquivo de producao do nosso projeto.

import React from 'react';

import Header from '../Header'
import Footer from '../Footer'

import './styles.css';

const App = () => {
  return (
    <>
    <Header />
    <main>
      Conteudo do Arquivo.
    </main>
    <Footer />
    </>
  );
}

export default App
