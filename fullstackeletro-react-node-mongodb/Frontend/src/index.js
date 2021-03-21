import React from 'react';
import ReactDOM from 'react-dom';
import LoadingPages from './fallback/loadingPages'

import { Provider } from 'react-redux'
import store from './store'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { lazy, Suspense } from 'react';

const App = lazy(() => import('./App'))

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<LoadingPages/>}>
            <App />
        </Suspense>
    </Provider >,
    document.getElementById('root')
  );