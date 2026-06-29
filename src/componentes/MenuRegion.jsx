import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MenuRegion({ experiencias }) {
  return (
    <>
      <Navbar />

      <main>
        {experiencias.map((exp) => (
          <section
            key={exp.id}
            className={`pantalla-dividida ${exp.invertida ? 'invertida' : ''}`}
          >
            <div className="lado-imagen">
              <video autoPlay muted loop playsInline>
                <source src={exp.video} type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>

            <div className="lado-texto">
              <div className="contenedor-info">
                <span className="categoria">{exp.categoria}</span>
                <h2>{exp.titulo}</h2>
                <p>{exp.descripcion}</p>
                <p className="precio">{exp.precio}</p>

                <Link to="/reservas" className="boton-reserva">
                  RESERVAR AHORA
                </Link>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}