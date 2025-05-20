import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <App />
  </BrowserRouter>
);
