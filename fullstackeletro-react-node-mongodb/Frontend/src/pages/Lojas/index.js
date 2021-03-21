import React from "react";
// Eu faco o import do react para poder usar codigo jsx.
import {Link} from "react-router-dom";
import '../../App.css';
import './lojas.css';
import SaoPaulo from "../../imgs/Lojas/SaoPaulo.jpg";
import SantaCatarina from "../../imgs/Lojas/SantaCatarina.jpg";
import RioDeJaneiro from "../../imgs/Lojas/RioDeJaneiro.jpg";

function Lojas() {
  // Um componente que na realidade eh uma PAGINA.
  return (
    <div className="container wrap-lojas">
      <div className="row mt-3">
        <div className="col-sm">
          <div className="card">
            <Link to="#">
              <img className="img-fluid card-img-top" src={SaoPaulo} alt="Sao Paulo"></img>
            </Link>
              <div className="card-body">
                <h5 className="card-title text-dark">São Paulo</h5>
                <p className="card-text text-dark">
                  Endereço: Rua Cajueiro <br />
                  Bairro: Cidade das Flores <br />
                  Cidade: Osasco <br />
                  Estado: SP <br /> <br />
                  Numero: (21) 3333-3333
                </p>
                <a href="#!" className="btn btn-fs text-light">Visitar</a>
              </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card">
            <Link to="#">
              <img className="img-fluid card-img-top" src={RioDeJaneiro} alt="Sao Paulo"></img>
            </Link>
              <div className="card-body">
                <h5 className="card-title text-dark">Rio de Janeiro</h5>
                <p className="card-text text-dark">
                  Endereço: Rua São Jorge <br />
                  Bairro: Parque Três Corações <br />
                  Cidade: Nova Iguaçu <br />
                  Estado: RJ <br /> <br />
                  Numero: (11) 4444-4444
                </p>
                <a href="#!" className="btn btn-fs text-light">Visitar</a>
              </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="card">
            <Link to="#">
              <img className="img-fluid card-img-top" src={SantaCatarina} alt="Sao Paulo"></img>
            </Link>
              <div className="card-body">
                <h5 className="card-title text-dark">Santa Catarina</h5>
                <p className="card-text text-dark">
                  Endereço: Rua Anastácio João <br />
                  Bairro: Centro <br />
                  Cidade: Araranguá <br />
                  Estado: SC <br /> <br />
                  Numero: (47) 5555-5555
                </p>
                <a href="#!" className="btn btn-fs text-light">Visitar</a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lojas;