import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Background from '../../components/background/Background';
import './About.css';

export default function About() {
  return (
    <div className="main">
      <Navbar/>
      <Background/>
      <p className='test'>this is about</p>
    </div>
  );
}
