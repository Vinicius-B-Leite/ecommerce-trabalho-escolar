import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './pages/products';
import Buy from './pages/buy';
import { createGlobalStyle } from 'styled-components';
import { ProdutoContextoProvider } from './contexts/ProdutoContext';

const cursor = require('./assets/cursor/cursor.png')
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    font-family: 'Cormorant SC', serif;
    background-color: #171717;
    overflow: hidden;
    box-sizing: border-box;
    height: 100vh;
    cursor: url(${cursor}), auto;
  }
`;

function App() {
  return (
    <ProdutoContextoProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtos' element={<Products />} />
          <Route path='/carrinho' element={<Buy />} />
        </Routes>
      </Router>
    </ProdutoContextoProvider>
  );
}

export default App;
