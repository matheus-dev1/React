import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

// console.log(store.getState())
// O metodo getState de store vai retonar todos os estados de todos os reducers.

ReactDOM.render(
  <Provider store={store}>
    {/* O provider faz com que esta store esta disponivel por toda a aplicacao. */}
    <App />
  </Provider >,
  document.getElementById('root')
);
