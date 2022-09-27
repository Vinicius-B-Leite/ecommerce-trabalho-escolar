import React from 'react';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Products from './pages/products';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/produtos' element={<Products/>} />
        </Routes>
    </Router>
  );
}

export default App;
