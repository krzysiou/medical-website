import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import Main from './pages/main/Main';

import './index.css';

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);