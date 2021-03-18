import React from "react";
// Eu faco o import do react para poder usar codigo jsx.
import {Link} from "react-router-dom";
// import fogao1 from '../../imgs/Produtos/fogao1.jpeg';
import './produtos.css';


function Produtos() {
  // Um componente que na realidade eh uma PAGINA.

  let [produtos, setProdutos] = React.useState([]);
  let [renderProdutos, setRenderProdutos] = React.useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const url = "http://localhost:3333/produtos";
    const response = await fetch(url);
    const data = await response.json();
    setProdutos(data);
  }, [renderProdutos]);
  
    function mostrar_categoria(categorias) {
        let elementos = document.getElementsByClassName('box-item');
        console.log(produtos)
        for(let indice = 0; indice < elementos.length; indice++){
            if (categorias === produtos[indice].categoria) {
                elementos[indice].style="display: inline-block";
            } else {
                elementos[indice].style="display:none";
            }
        }
    }

    function mostrar_todos() {
    let elementos = document.getElementsByClassName('box-item');
    for (let indice = 0; indice < elementos.length; indice++) {
        elementos[indice].style = "display:inline-block";
        }
    }

  return (
    <div className="container-fluid m-3 row">
            <div className="list-group col-3 d-block categorias">
            <h3 className="h3">Categoria de Produtos</h3>
                <ul>
                    <li className="list-group-item" onClick={mostrar_todos}>Todos os Produtos (12)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('geladeira')} >Geladeiras (3)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('fogao')} >Fogoes (2)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('microondas')} >Microondas (3)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('lavaroupas')} >Lava Roupas (3)</li>
                    <li className="list-group-item" onClick={() => mostrar_categoria('lavaloucas')} >Lava-Loucas (1)</li>
                </ul>
            </div>

            <div className="col-sm wrap-produtos">
                {produtos.map(element => {
                    return (
                        <div key={element.idproduto} className="card w-25 box-item">
                            <div className="card-body">
                                <img className="card-img-top zoom" src={require(`../../imgs/Produtos/${element.imagem}`).default} alt={element.categoria}></img>
                                <h5 className="card-title">{element.descricao}</h5>
                                <p className="card-text preco">De: <strike>R$ {element.preco}</strike></p>
                                <p className="card-text">Por: R$ {element.precofinal}</p>
                                <a className="btn btn-fs text-light" href="#!">Acessar produto</a>
                                <a className="btn btn-fs text-light mt-2" href="#!">Adicionar no Carrinho</a>
                            </div>
                        </div>
                )})}
            </div>
        </div>
  );
}

export default Produtos;