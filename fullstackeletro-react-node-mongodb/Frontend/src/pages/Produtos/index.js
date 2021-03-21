import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from '../../actions'
import './produtos.css';

function Produtos() {

    let [alert, setAlert] = React.useState(false);

    const dispatch = useDispatch()

    const produtos = useSelector((state) => {
        return(
            state.Products
        )
    })
  
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

    function adicionarProduto(id){
        dispatch(ADD_TO_CART(id))
        setAlert(true)
        setTimeout(async () => {setAlert(false)}, 5000);
    }

  return (
    <div className="container-fluid m-3 row">
            <div className="list-group d-block categorias col-sm-12 col-md-3">
            <h3 className="h3">Categoria de Produtos</h3>
                <ul>
                    <li className="list-group-item pointer" onClick={mostrar_todos}>Todos os Produtos (12)</li>
                    <li className="list-group-item pointer" onClick={() => mostrar_categoria('geladeira')} >Geladeiras (3)</li>
                    <li className="list-group-item pointer" onClick={() => mostrar_categoria('fogao')} >Fogoes (2)</li>
                    <li className="list-group-item pointer" onClick={() => mostrar_categoria('microondas')} >Microondas (3)</li>
                    <li className="list-group-item pointer" onClick={() => mostrar_categoria('lavaroupas')} >Lava Roupas (3)</li>
                    <li className="list-group-item pointer" onClick={() => mostrar_categoria('lavaloucas')} >Lava-Loucas (1)</li>
                </ul>
            </div>

            {alert && 
                <div className="alert alert-success mt-4 positionAlert" role="alert">
                    Produto adicionado ao Carrinho!
                </div>
            }

            <div className="col-sm-12 col-md-9 wrap-produtos">
                {produtos.map(item => {
                    return (
                        <div key={item.idproduto} className="card w-25 box-item">
                            <div className="card-body">
                                <img className="card-img-top zoom" src={require(`../../imgs/Produtos/${item.imagem}`).default} alt={item.categoria}></img>
                                <h5 className="card-title text-dark">{item.descricao}</h5>
                                <p className="card-text preco">De: <strike>R$: {item.preco}</strike></p>
                                <p className="card-text text-dark">Por: R$: {item.precofinal}</p>
                                <button type="button" className="btn btn-fs text-light">Acessar produto</button>
                                <button onClick={() => adicionarProduto(item.idproduto)} type="button" className="btn btn-fs text-light mt-2" >Adicionar no Carrinho</button>
                            </div>
                        </div>
                )})}
            </div>
        </div>
  );
}

export default Produtos;