import Product from './components/Product/Product'
import CartS from './components/Cart/CartS'

import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'

function Routes(){
    return(
        <BrowserRouter>
                        <NavLink to="/">Produtos</NavLink>
                <NavLink to="/carrinho">Carrinho</NavLink>
            <Switch>

                <Route path="/" element={<Product/>}/>
                <Route path="/carrinho" element={<CartS/>}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes