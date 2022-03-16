import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Background from '../../components/background/Background';
import './Contact.css';

export default function Contact() {
  return (
    <div className="main">
      <Navbar/>
      <Background/>
      <p className='test'>this is contacts</p>
    </div>
  );
}
