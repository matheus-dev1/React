import React from "react";
import {
    Switch,
    Route
  } from "react-router-dom";

import Contato from "./pages/Contato";
import Index from "./pages/Index/index.js";
import Lojas from "./pages/Lojas";
import Pedidos from "./pages/Pedidos";
import Produtos from './pages/Produtos';
import CartS from './pages/Cart/CartS'

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