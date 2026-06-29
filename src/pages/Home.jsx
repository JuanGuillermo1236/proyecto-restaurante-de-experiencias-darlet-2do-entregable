import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Restaurante D'Arlet</h1>
        <p id="subtitulo">
          Una experiencia gastronómica única que une las tres regiones del asombroso
          Perú en un solo lugar de degustación culinaria: Costa, Sierra y Selva.
        </p>

        <h2 id="regiones">Explora los Menús de Degustación</h2>

        <section className="regiones">
          {/* COSTA */}
          <article className="region-card">
            <Link to="/costa">
              <video autoPlay muted loop playsInline>
                <source src="videos/costa-drone.mp4" type="video/mp4" />
              </video>
              <div className="region-info">
                <h3>COSTA</h3>
                <p>Sabores frescos del mar. Ceviches, tiraditos y causas limeñas hechas con los mejores ingredientes del Pacífico.</p>
              </div>
            </Link>
          </article>

          {/* SIERRA */}
          <article className="region-card">
            <Link to="/sierra">
              <video autoPlay muted loop playsInline>
                <source src="videos/sierra-drone.mp4" type="video/mp4" />
              </video>
              <div className="region-info">
                <h3>SIERRA</h3>
                <p>El alma de los Andes. Papas nativas, quinua y guisos tradicionales con el sabor profundo de la tierra andina.</p>
              </div>
            </Link>
          </article>

          {/* SELVA */}
          <article className="region-card">
            <Link to="/selva">
              <video autoPlay muted loop playsInline>
                <source src="videos/selva-drone.mp4" type="video/mp4" />
              </video>
              <div className="region-info">
                <h3>SELVA</h3>
                <p>La magia amazónica. Paiche, cocona y camu camu traídos directamente de la Amazonía a tu mesa.</p>
              </div>
            </Link>
          </article>
        </section>

        <h2 id="historia">Nuestra Historia</h2>

        <section className="contenedor-historia">
          <article className="fila-historia">
            <video autoPlay muted loop playsInline className="multimedia-historia">
              <source src="videos/historia.mp4" type="video/mp4" />
            </video>
            <div className="texto-historia">
              <h3>El Origen</h3>
              <p>D'Arlet nació de un sueño en el 2006 de la mano del chef Arlet Aragón.</p>
              <ul className="lista-premium">
                <li>Fundado en Puerto Maldonado, Madre de Dios</li>
                <li>Más de 18 años de experiencia</li>
                <li>Graduado de la Universidad Gastronómica del Perú</li>
                <li>Afamado explorador de las tres regiones del Perú</li>
                <li>Devoto a los cuidados ambientales</li>
              </ul>
            </div>
          </article>

          <article className="fila-historia invertida">
            <video autoPlay muted loop playsInline className="multimedia-historia">
              <source src="videos/reconocimientos.mp4" type="video/mp4" />
            </video>
            <div className="texto-historia">
              <h3>Reconocimientos</h3>
              <p>A lo largo de los años, D'Arlet ha sido reconocido por su compromiso con los ingredientes locales del país y la técnica culinaria de alto nivel.</p>
              <ul className="lista-premium">
                <li>Mejor restaurante criollo 2018</li>
                <li>Premio a la innovación 2020</li>
                <li>Valoración promedio ★ 4.9</li>
                <li>Top ten de restaurantes a nivel mundial</li>
              </ul>
            </div>
          </article>

          <article className="fila-historia">
            <video autoPlay muted loop playsInline className="multimedia-historia">
              <source src="videos/visitas.mp4" type="video/mp4" />
            </video>
            <div className="texto-historia">
              <h3>Visítanos</h3>
              <p>Estamos ubicados en el corazón de Miraflores, listos para recibirte de lunes a domingo con nuestra carta completa.</p>
              <ul className="lista-premium">
                <li>Av. Los Limones, SinchiRoca</li>
                <li>Lunes a Viernes: 12pm - 11pm</li>
                <li>Sábados y Domingos: 11am - 12am</li>
                <li>Reservas previa coordinación</li>
              </ul>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
