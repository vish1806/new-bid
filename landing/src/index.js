import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { AuthProvider } from "./context/auth";
import { SearchProvider } from './context/search';
import { CartProvider } from './context/cart';
import App from "./App";

import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  </AuthProvider>
);
reportWebVitals();