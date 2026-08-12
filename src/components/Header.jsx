import React from 'react';
import Navbar from '../components/Navbar.jsx';
import '../App.css';

export default function Header() {
  return (
    <header className="header">
        <div className="logo">
            <img src="" alt="Logo do Instituto Federal" />
        </div>
      <Navbar />
      <div className="botao">
        <button>Login</button>
        </div>
    </header>
  );
}