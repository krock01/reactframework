import './style.css';
import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';

if(module.hot){
  module.hot.accept();
}
ReactDOM.render(<App />,document.getElementById('root'));

