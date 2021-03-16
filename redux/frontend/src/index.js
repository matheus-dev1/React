import React from 'react'
import ReactDOM from 'react-dom'
// O arquivo com todos os nosso components.
import App from './App'
// A funcao provider atribui ao nosso arquivo App a nossa Store.
import { Provider } from 'react-redux'
// Importando a nossa store para ser usada no Provider
import store from './store'
// O store armazena e tambem disponibilida diversas funcoes referente aos estados e reducers armazenados nele.

// 1. Instalar Redux - npm install redux
// 2. instalar React-Redux - npm install react-redux
// 3. Criar um Store.
// 4. Criar um Reducer.
// 5. Provider
// 6. useSelector
// 7. useDispatch

ReactDOM.render(
  // Temos que passar a nossa store como parametro da propriedade store
  <Provider store={store}>
    {/* Redux CDN - https://unpkg.com/redux@4.0.5/dist/redux.js */}
    {/* No react-redux tem uma funcao chamada <Provider /> que recebe como parametro a nossa Store e coloca no nosso <App />.*/}
    {/*- Exemplo: <Provider store={store}> <App /> </Provider>*/}
    <App />
  </Provider>,
  document.getElementById('root')
)
