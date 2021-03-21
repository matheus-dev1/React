/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// Eu faco o import do react para poder usar codigo jsx.
import './contato.css';
import WhatsApp from '../../imgs/Contato/whatsapp_icon.png';
import Email from '../../imgs/Contato/email_icon.png';

function Contato() {
  // Um componente que na realidade eh uma PAGINA.

  let [mensagens, setMensagens] = React.useState([]);
  let [renderMensagens, setRenderMensagens] = React.useState(false);
  let [alert, setAlert] = React.useState(false);

  let [nomeState, setNome] = React.useState("");
  let [emailState, setEmail] = React.useState("");
  let [assuntoState, setAssunto] = React.useState("");
  let [mensagemState, setMensagem] = React.useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const url = "http://localhost:3333/mensagem"
    const response = await fetch(url);
    const data = await response.json();
    setMensagens(data);
    // Sempre a pagina carregar ou que o estado de renderStudent for alterado renderizar a pagina novamente.
}, [renderMensagens]);

  function mensagemRegister(event) {
    event.preventDefault();
    let form = {
      nome: nomeState,
      email: emailState,
      assunto: assuntoState,
      mensagem: mensagemState
    }
    const url = "http://localhost:3333/mensagem";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(form)
      })
        .then((response) => response.json())
        .then((dados) => {
          setRenderMensagens(!renderMensagens);
          setAlert(true);
        })
    }

    setTimeout(async () => {setAlert(false)}, 5000);
    
  return (
    <div className="container mt-3">
      <div class="row d-flex justify-content-center">
        <div class="col-sm-6 col-md-3">
          <div class="card">
            <div class="card-body">
              <img className="img-fluid card-img-top  w-25 h-25" src={WhatsApp} alt="WhatsApp"></img>
              <h5 class="card-title text-dark">WhatsApp</h5>
              <p class="card-text text-dark">(21) 3333-3333</p>
              <a href="#" class="btn btn-fs text-light">Contactar-nos</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="card">
            <div class="card-body">
              <img className="img-fluid card-img-top w-25 h-25" src={Email} alt="Email"></img>
              <h5 class="card-title text-dark">E-mail</h5>
              <p class="card-text text-dark">fullstackeletro@dev.com</p>
              <a href="#" class="btn btn-fs text-light">Contactar-nos</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center pt-4">
        <form className="container" onSubmit={mensagemRegister}>
          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Nome:</span>
              </div>
              <input className="form-control" aria-describedby="nameHelp" type="text" name="nome" id="nome" placeholder="Exemplo: Matheus de Oliveira Silva" value={nomeState} onChange={event => setNome(event.target.value)}></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">E-mail:</span>
              </div>
              <input className="form-control" type="email" name="email" id="email" placeholder="Exemplo: exemplo@exemplo.com" value={emailState} onChange={event => setEmail(event.target.value)}></input>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Assunto:</span>
              </div>

              <select className="form-control" name="assunto" id="assunto" onChange={event => setAssunto(event.target.value)}>
                  <option value="elogio">Exemplo: Elogio</option>
                  <option value="elogio">Elogio</option>
                  <option value="relamacao">Relamacao</option>
                  <option value="duvida">Duvida</option>
                  <option value="profissional">Contato Profissional</option>
              </select>
          </div>

          <div className="form-group input-group">
              <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Assunto:</span>
              </div>
              <textarea className="form-control" name="mensagem" id="mensagem" cols="40" rows="2" placeholder="Exemplo: Otima lista de produtos" onChange={event => setMensagem(event.target.value)}></textarea>
          </div>

          <button className="btn btn-fs text-light form-control mb-3">Enviar</button>

          <h1 className="h1 text-center mt-3">Contatos enviados</h1>
        </form>

        {alert === true && 
                <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                    Comentario efetuado com sucesso!
                </div>
            }
        

            {mensagens.map((element) => {
                return (
                  // Dentro de um componente podemos ter vairos return(
                    <div key={element.id} className="card w-75 mt-4 mx-auto">
                      <ul class="list-group list-group-flush border border-danger">
                        <li class="list-group-item border-bottom-danger text-dark">Nome: {element.nome}</li>
                        <li class="list-group-item text-dark">E-mail: {element.email}</li>
                        <li class="list-group-item text-dark">Assunto: {element.assunto}</li>
                        <li class="list-group-item pb-3 text-dark">Mensagem: {element.mensagem}</li>
                        <div className="">
                          <button href="#" class="btn btn-primary text-light w-25 m-3 d-inline-block ">Editar</button>
                          <button href="#" class="btn btn-fs text-light w-25 m-3 d-inline-block">Apagar</button>
                          <button href="#" class="btn btn-info text-light m-3 w-25 d-inline-block">Alterar</button>
                        </div>
                      </ul>
                    </div>
                );
            })}
      </div>
    </div>
  );
}

export default Contato;