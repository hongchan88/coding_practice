import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Searchbar from './components/Searchbar'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Searchbar />
  </React.StrictMode>,
  document.getElementById('root')
);


