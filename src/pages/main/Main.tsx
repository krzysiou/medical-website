import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Background from '../../components/background/Background';
import './Main.css';

export default function Main() {
  return (
    <div className="main">
      <Navbar/>
      <Background/>
    </div>
  );
}
