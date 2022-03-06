import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import Main from './pages/main/Main';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Prices from './pages/prices/Prices';

import './index.css';

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/prices" element={<Prices/>}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);