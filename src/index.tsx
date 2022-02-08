import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import App from './pages/App';

import './index.css';

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);