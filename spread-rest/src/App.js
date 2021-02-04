import React from 'react';

import Input from './components/input.jsx';
import Form from './components/Form.jsx';

function App() {
  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState("");

  function changeName(event) {
    setNome(event.target.value)
  }

  function changeAge(event) {
    setIdade(event.target.value)
  }

  function Cadastro(event){
    event.preventDefault();

    // Logica de Cadastro

    alert("Cadastro efetuado com sucesso!")

    setNome("")
    setIdade("");
  }

  function Zoom(){
    let produto = document.getElementById("produto")

    if (produto.style.width == "300px") {
      produto.style.width = "400px";
    } else {
      produto.style.width = "300px";
    }
  }

  return (
    <div className="container mt-5">
      {/* <Input label="Nome" type="text" placeholder="Nome: " name="name" id="name" require="required"/>

      <Input label="idade" type="number" placeholder="Idade: " name="idade"/>
      <br></br><br></br><br></br><br></br>
      <Form action="/" method="GET">
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
      </Form> */}

      <form onSubmit={Cadastro}>
        <input type="text" placeholder="Digite o seu nome: " value={nome} onChange={changeName}></input>
        {nome && <p>Meu nome e {nome}</p>}
        
        <input type="number" placeholder="Digite o sua idade: " value={idade} onChange={changeAge}></input>
        {idade && <p>Eu tenho {idade} anos</p>}

        <button>Cadastrar</button>
      </form>
      
      {/* EStilo padrao para cards no Bootstrap width: 17.5rem */}
      <img onClick={Zoom} id="produto" style={{width: "300px"}} src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png"></img>
    </div>
  );
}

export default App;
