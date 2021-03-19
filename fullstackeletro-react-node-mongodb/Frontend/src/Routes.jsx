import React from "react";
import {
    Switch,
    Route
  } from "react-router-dom";

import Contato from "./Pages/Contato";
import Index from "./Pages/Index/index.js";
import Lojas from "./Pages/Lojas";
import Pedidos from "./Pages/Pedidos";
import Produtos from './Pages/Produtos';
import CartS from './Pages/Cart/CartS'

function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/produtos" component={Produtos}/>
            <Route exact path="/carrinho" component={CartS}/>
            <Route exact path="/lojas" component={Lojas}/>
            <Route exact path="/pedidos" component={Pedidos}/>
            <Route exact path="/contato" component={Contato}/>
        </Switch>
    );
}

export default Routes;