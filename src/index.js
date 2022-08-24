import React, { StrictMode } from 'react';
import  ReactDOM from 'react-dom/client';
import App from './App.js'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   // <StrictMode> //removed for unwanted double call with componentDidMount();
         <App />
   // </StrictMode>
   
);

