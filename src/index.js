import React from 'react';
import ReactDOM from 'react-dom';
import Bardogui from './bardogui';
import Header from './components/header';
import GlobalStyle from './styles/global'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Header/>
    <Bardogui />
  </React.StrictMode>,
  document.getElementById('root')
);

