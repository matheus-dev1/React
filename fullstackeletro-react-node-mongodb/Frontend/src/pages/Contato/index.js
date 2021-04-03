/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import './contato.css';

function Contato() {
  let [mensagens, setMensagens] = React.useState([]);
  let [renderMensagens, setRenderMensagens] = React.useState(false);

  let [alert, setAlert] = React.useState(false);
  let [alertUpdate, setAlertUpdate] = React.useState(false);
  let [alertDelete, setalertDelete] = React.useState(false);

  let [nomeState, setNome] = React.useState("");
  let [emailState, setEmail] = React.useState("");
  let [assuntoState, setAssunto] = React.useState("");
  let [mensagemState, setMensagem] = React.useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const url = "http://localhost:3333/mensagens"
    const response = await fetch(url);
    const data = await response.json();
    setMensagens(data);
}, [renderMensagens]);

  function mensagemRegister(event) {
    event.preventDefault();
    let form = {
      nome: nomeState,
      email: emailState,
      assunto: assuntoState,
      mensagem: mensagemState
    }
    const url = "http://localhost:3333/mensagens";

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

    function editMensagem(event){
      // eslint-disable-next-line array-callback-return
      mensagens.map((element) => {
        if(event.target.value === document.getElementById(element._id).id){
          if(document.getElementById(element._id + " save").disabled === true){
            document.getElementById(element._id + " nome").disabled = false
            document.getElementById(element._id + " email").disabled = false
            document.getElementById(element._id + " assunto").disabled = false
            document.getElementById(element._id + " mensagem").disabled = false
            document.getElementById(element._id + " save").disabled = false
          } else {
            document.getElementById(element._id + " nome").disabled = true
            document.getElementById(element._id + " email").disabled = true
            document.getElementById(element._id + " assunto").disabled = true
            document.getElementById(element._id + " mensagem").disabled = true
            document.getElementById(element._id + " save").disabled = true
          }
        }
      })
    }

    function mensagemUpdate(event){
      event.preventDefault();
      mensagens.map((element) => {
        if(event.target.value === document.getElementById(element._id).id){
          var _id = document.getElementById(element._id).id
          _id = _id.toString()
          console.log(_id)
          var nome = document.getElementById(element._id + " nome").value
          var email = document.getElementById(element._id + " email").value
          var assunto = document.getElementById(element._id + " assunto").value
          var mensagem = document.getElementById(element._id + " mensagem").value
          
          let form = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem,
            idPut: _id
          }
  
          const url = "http://localhost:3333/mensagens"
  
          fetch(url, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(form)
          })
          .then((response) => response.json())
          .then((dados) => {
            setRenderMensagens(!renderMensagens);
            setAlertUpdate(true);
          })
        }}
      )}

      function mensagemDelete(event){
        // eslint-disable-next-line array-callback-return
        event.preventDefault();
        mensagens.map((element) => {
          if(event.target.value === document.getElementById(element._id).id){
            var _id = document.getElementById(element._id).id
            _id = _id.toString()
            
            let form = {
              idDelete: _id
            }
    
            const url = "http://localhost:3333/mensagens"
    
            fetch(url, {
              method: 'DELETE',
              headers: { "Content-Type": "application/json"},
              body: JSON.stringify(form)
            })
            .then((response) => response.json())
            .then((dados) => {
              setRenderMensagens(!renderMensagens);
              setalertDelete(true);
            })
          }}
        )}

    setTimeout(async () => {setAlert(false)}, 10000);
    setTimeout(async () => {setAlertUpdate(false)}, 10000);
    setTimeout(async () => {setalertDelete(false)}, 10000);
    
  return (
    <div className="container mt-3">

      <div className="row d-flex justify-content-center">
        <div className="col-sm-6 col-md-3">
          <div className="card">
            <div className="card-body">
              <img className="img-fluid card-img-top  w-25 h-25" src={require('../../imgs/Contato/whatsapp_icon.png').default} alt="WhatsApp"></img>
              <h5 className="card-title text-dark">WhatsApp</h5>
              <p className="card-text text-dark">(21) 3333-3333</p>
              <a href="#" className="btn btn-fs text-light">Contactar-nos</a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="card">
            <div className="card-body">
              <img className="img-fluid card-img-top w-25 h-25" src={require('../../imgs/Contato/email_icon.png').default} alt="Email"></img>
              <h5 className="card-title text-dark">E-mail</h5>
              <p className="card-text text-dark">fullstackeletro@dev.com</p>
              <a href="#" className="btn btn-fs text-light">Contactar-nos</a>
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
              <textarea className="form-control" name="mensagem" id="mensagem" cols="40" rows="4" placeholder="Exemplo: Otima lista de produtos" onChange={event => setMensagem(event.target.value)}></textarea>
          </div>

          <button className="btn btn-fs text-light form-control mb-3">Enviar</button>

          <h1 className="h1 text-center mt-3">Contatos enviados</h1>
        </form>

        {alert && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">Mensagem efetuada com sucesso!</div>}
        {alertUpdate && <div className="alert alert-info mx-auto mt-4 w-75" role="alert">Mensagem alterada com sucesso!</div>}
        {alertDelete && <div className="alert alert-danger mx-auto mt-4 w-75" role="alert">Mensagem deletada com sucesso!</div>}

            {mensagens.map((element) => {
                return (
                    <div key={element._id} className="card w-75 mt-4 mx-auto">

                         <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Nome:</span>
                            </div>
                            <input className="form-control" type="text" name={element._id} id={element._id + " nome"} placeholder="Exemplo: Matheus de Oliveira Silva" defaultValue={element.nome} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">E-mail:</span>
                            </div>
                            <input className="form-control" type="email" name={element._id} id={element._id + " email"} placeholder="Exemplo: exemplo@exemplo.com" defaultValue={element.email} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Assunto:</span>
                            </div>
                            <select className="form-control" name={element._id} id={element._id + " assunto"} defaultValue={element.assunto} disabled>
                                <option value="elogio">Elogio</option>
                                <option value="relamacao">Relamacao</option>
                                <option value="duvida">Duvida</option>
                                <option value="profissional">Contato Profissional</option>
                            </select>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Data Postagem:</span>
                            </div>
                            <input className="form-control" type="text" name={element._id} id={element._id + " data_post"} placeholder="Exemplo: 2021-04-03T03:33:27.317Z" defaultValue={element.data_post} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Assunto:</span>
                            </div>
                            <textarea className="form-control" name={element._id} id={element._id + " mensagem"} cols="40" rows="4" placeholder="Exemplo: Otima lista de produtos" defaultValue={element.mensagem} disabled></textarea>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{display: 'none'}}>ID:</span>
                            </div>
                            <input className="form-control" type="text" name={element._id} id={element._id} value={element._id}  style={{display: 'none'}} disabled></input>
                        </div>

                        <div>
                          <button className="btn btn-fs text-light w-25 m-3 d-inline-block" value={element._id} id={element._id} onClick={editMensagem}>Editar</button>

                          <button className="btn btn-fs text-light w-25 m-3 d-inline-block" value={element._id} id={element._id + " save"} onClick={mensagemUpdate}>Salvar</button>

                          <button className="btn btn-fs text-light w-25 m-3 d-inline-block" value={element._id} id={element._id + " delete"} onClick={mensagemDelete}>Deletar</button>
                          
                        </div>
                    </div>
                );
            })}
      </div>
    </div>
  );
}

export default Contato;