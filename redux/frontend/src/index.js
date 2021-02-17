import React from 'react'
import ReactDOM from 'react-dom'
// O arquivo com todos os nosso components.
import App from './App'
// A funcao provider atribui ao nosso arquivo App a nossa Store.
import { Provider } from 'react-redux'
// Importando a nossa store para ser usada no Provider
import store from './store'

ReactDOM.render(
  // Temos que passa-la como parametro
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
