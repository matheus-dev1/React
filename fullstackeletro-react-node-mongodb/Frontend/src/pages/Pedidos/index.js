import React from "react";
// Eu faco o import do react para poder usar codigo jsx.
import './pedidos.css';

function Pedidos() {
  // Um componente que na realidade eh uma PAGINA.
  let [pedidos, setPedidos] = React.useState([]);
  let [renderPedidos, setRenderPedidos] = React.useState(false);

  let [alert, setAlert] = React.useState(false);
  let [alertUpdate, setAlertUpdate] = React.useState(false);
  let [alertDelete, setalertDelete] = React.useState(false);
  

  let [nomeState, setNome] = React.useState("");
  let [enderecoState, setEndereco] = React.useState("");
  let [telefoneState, setTelefone] = React.useState(0);
  let [produtoState, setProduto] = React.useState("");
  let [valor_uniState, setValor_uni] = React.useState(0);
  let [qtd_produtoState, setQtd_produto] = React.useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const url = "http://localhost:3333/pedidos";
    const response = await fetch(url);
    const data = await response.json();
    setPedidos(data);
  }, [renderPedidos]);

  function pedidosRegister(event){
    event.preventDefault();
    let form = {
      nome: nomeState,
      endereco: enderecoState,
      telefone: telefoneState,
      produto: produtoState,
      valor_uni: valor_uniState,
      qtd_produto: qtd_produtoState
    }

    const url = "http://localhost:3333/pedidos";

    fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(form)
    })
    .then((response) => response.json())
    .then((dados) => {
      setRenderPedidos(!renderPedidos);
      setAlert(true);
    })
  }

  function editPedido(event){
    // eslint-disable-next-line array-callback-return
    pedidos.map((element) => {
      if(event.target.value === document.getElementById(element._id).id){


        if(document.getElementById(element._id + " save").disabled === true){
          document.getElementById(element._id + " nome_cli").disabled = false
          document.getElementById(element._id + " endereco").disabled = false
          document.getElementById(element._id + " telefone").disabled = false
          document.getElementById(element._id + " produto").disabled = false
          document.getElementById(element._id + " valor_uni").disabled = false
          document.getElementById(element._id + " qtd_prod").disabled = false
          document.getElementById(element._id + " save").disabled = false
        } else {
          document.getElementById(element._id + " nome_cli").disabled = true
          document.getElementById(element._id + " endereco").disabled = true
          document.getElementById(element._id + " telefone").disabled = true
          document.getElementById(element._id + " produto").disabled = true
          document.getElementById(element._id + " valor_uni").disabled = true
          document.getElementById(element._id + " qtd_prod").disabled = true
          document.getElementById(element._id + " save").disabled = true
        }
      }
    })
  }

  function pedidoUpdate(event){
    // eslint-disable-next-line array-callback-return
    event.preventDefault();
    pedidos.map((element) => {
      if(event.target.value === document.getElementById(element._id).id){
        var _id = document.getElementById(element._id).id
        _id = _id.toString()
        var nome_cli = document.getElementById(element._id + " nome_cli").value
        var endereco = document.getElementById(element._id + " endereco").value
        var telefone = document.getElementById(element._id + " telefone").value
        var produto = document.getElementById(element._id + " produto").value
        var valor_uni = document.getElementById(element._id + " valor_uni").value
        var qtd_prod = document.getElementById(element._id + " qtd_prod").value
        
        let form = {
          nome: nome_cli,
          endereco: endereco,
          telefone: telefone,
          produto: produto,
          valor_uni: valor_uni,
          qtd_produto: qtd_prod,
          idPost: _id
        }

        const url = "http://localhost:3333/pedidos"

        fetch(url, {
          method: 'PUT',
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(form)
        })
        .then((response) => response.json())
        .then((dados) => {
          setRenderPedidos(!renderPedidos);
          setAlertUpdate(true);
        })
      }}
    )}

    function pedidoDelete(event){
      // eslint-disable-next-line array-callback-return
      event.preventDefault();
      pedidos.map((element) => {
        if(event.target.value === document.getElementById(element._id).id){
          var _id = document.getElementById(element._id).id
          _id = _id.toString()
          
          let form = {
            idPost: _id
          }
  
          const url = "http://localhost:3333/pedidos"
  
          fetch(url, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(form)
          })
          .then((response) => response.json())
          .then((dados) => {
            setRenderPedidos(!renderPedidos);
            setalertDelete(true);
          })
        }}
      )}
  
  setTimeout(async () => {setAlert(false)}, 10000);
  setTimeout(async () => {setAlertUpdate(false)}, 10000);
  setTimeout(async () => {setalertDelete(false)}, 10000);

  return (
    <div className="container mt-3">
      <h1 className="h1 text-center">Fazer um pedido</h1>

        <div className="row justify-content-center">
          <form className="container" onSubmit={pedidosRegister}>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Nome:</span>
                </div>
                <input className="form-control" aria-describedby="nameHelp" type="text" name="nome" id="nome" placeholder="Exemplo: Matheus de Oliveira Silva"value={nomeState} onChange={event => setNome(event.target.value)}></input>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Endereco:</span>
                </div>
                <input className="form-control" type="text" name="endereco" id="endereco" placeholder="Exemplo: Rua Tiradentes, 1837" value={enderecoState} onChange={event => setEndereco(event.target.value)}></input>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Telefone:</span>
                </div>
                <input className="form-control" type="number" name="telefone" id="telefone" placeholder="Exemplo: 11 969699509" value={telefoneState} onChange={event => setTelefone(event.target.value)}></input>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Produto:</span>
                </div>
                <input className="form-control" type="text" name="produto" id="produto" placeholder="Exemplo: Maquina de lavar, Brastemp" value={produtoState} onChange={event => setProduto(event.target.value)}></input>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Valor Unitario - R$:</span>
                </div>
                <input className="form-control" type="number" name="valor_uni" id="valor_uni" placeholder="Exemplo: 100.99" value={valor_uniState} onChange={event => setValor_uni(event.target.value)}></input>
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Quantidade:</span>
                </div>
                <input className="form-control" type="number" name="qtd_produto" id="qtd_produto" placeholder="Exemplo: 5" value={qtd_produtoState} onChange={event => setQtd_produto(event.target.value)}></input>
            </div>

            <button className="btn btn-fs text-light form-control mb-3">Enviar</button>

            <h1 className="h1 text-center mt-3">Pedidos Enviados</h1>
          </form>
        </div>

      {alert === true && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">Pedido efetuado com sucesso!</div>}
      {alertUpdate === true && <div className="alert alert-info mx-auto mt-4 w-75" role="alert">Pedido alterado com sucesso!</div>}
      {alertDelete === true && <div className="alert alert-danger mx-auto mt-4 w-75" role="alert">Pedido deletado com sucesso!</div>}
        
            {pedidos.map((element) => {
                return (
                    <div className="card w-75 mt-4 mx-auto">
                      <form className="container" onSubmit={pedidoUpdate}>
                      <div key={element._id}>

                        <div className="form-group input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text">Nome:</span>
                          </div>
                          <input className="form-control" type="text" name={element._id} id={element._id + " nome_cli"} placeholder="Exemplo: Matheus de Oliveira Silva" defaultValue={element.nome_cli} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Endereco:</span>
                            </div>
                            <input className="form-control" type="text" name={element._id} id={element._id + " endereco"} placeholder="Exemplo: Rua Tiradentes, 1837" defaultValue={element.endereco} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Telefone:</span>
                            </div>
                            <input className="form-control" type="number" name={element._id} id={element._id + " telefone"} placeholder="Exemplo: 11 969699509" defaultValue={element.telefone} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Produto:</span>
                            </div>
                            <input className="form-control" type="text" name={element._id} id={element._id + " produto"} placeholder="Exemplo: Maquina de lavar, Brastemp" defaultValue={element.produto} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Valor Unitario - R$:</span>
                            </div>
                            <input className="form-control" type="number" name={element._id} id={element._id + " valor_uni"} placeholder="Exemplo: 100.99" defaultValue={element.valor_uni} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Quantidade:</span>
                            </div>
                            <input className="form-control" type="number" name={element._id} id={element._id + " qtd_prod"} placeholder="Exemplo: 5" defaultValue={element.qtd_prod} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Valor Total: </span>
                            </div>
                            <input className="form-control" type="number" name={element._id} id={element._id + " valor_total"} placeholder="Quantidade * Valor Unitario" defaultValue={element.valor_total} disabled></input>
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" style={{display: 'none'}}>ID:</span>
                            </div>
                            <input className="form-control" type="text" name={element._id} id={element._id} value={element._id}  style={{display: 'none'}} disabled></input>
                        </div>

                        <div>
                          <button className="btn btn-fs text-light w-25 m-3 d-inline-block" value={element._id} onClick={editPedido}>Editar</button>

                          <button className="btn btn-fs text-light w-25 m-3 d-inline-block" value={element._id} id={element._id + " save"} onClick={pedidoUpdate} disabled>Salvar</button>

                          <button type="button" className="btn btn-fs text-light w-25 m-3 d-inline-block" data-toggle="modal" data-target="#exampleModal">
                            Deletar
                          </button>

                          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title text-dark" id="exampleModalLabel">Deseja deletar este comentario?</h5>
                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div className="modal-body text-dark">
                                  Se deletar este comentario nao podera recupera-lo!
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                  <button type="button" className="btn btn-fs text-light" data-dismiss="modal" value={element._id} id={element._id + " delete"} onClick={pedidoDelete}>Deletar!</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                      </div>
                    </form>
                  </div>
                );
            })}
    </div>
  );
}

export default Pedidos