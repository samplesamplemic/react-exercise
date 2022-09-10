import React, { StrictMode } from 'react';
import  ReactDOM from 'react-dom/client';
import App from './App.js';
import {SWRConfig} from 'swr';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fetcher = url => fetch(url).then(response => response.json());

root.render(
   // <StrictMode> //removed for unwanted double call with componentDidMount();
         <SWRConfig value={{fetcher}} >

            <App />
         </SWRConfig> 
   // </StrictMode>
   
);

