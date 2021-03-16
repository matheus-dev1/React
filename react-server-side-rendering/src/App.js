// import logo from './logo.svg';
// import './App.css';
// O SSR apenas comecou a funcionar quando eu comentei o CSS, a Imagem exportada e coloquei o React 

import React from 'react';
import Copyright from './Copyright'

function App() {
  // const date = new Date().getFullYear()
  return (
      <Copyright ano="2021"/>
  );
}

export default App;
