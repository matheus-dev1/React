import React from 'react'

import Product from './components/Product/Product'
import CartS from './components/Cart/CartS'

import {BrowserRouter, NavLink, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/">Produtos</NavLink>
      <NavLink to="/carrinho">Carrinho</NavLink>
      <Switch>
        <Route path="/" exact component={Product}/>
        <Route path="/carrinho" exact component={CartS}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
