import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><a href="/#regiones">NUESTRA CARTA</a></li>
          <li><a href="/#historia">HISTORIA</a></li>
          <li><Link to="/reservas">RESERVAS</Link></li>
        </ul>
      </nav>
    </header>
  );
}
