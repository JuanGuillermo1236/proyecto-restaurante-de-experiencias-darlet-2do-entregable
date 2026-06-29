import React, { useState } from "react";
import axios from "axios";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";

const estadoInicial = {
  nombre: "",
  email: "",
  telefono: "",
  fecha: "",
  region: "",
  comensales: "",
  mensaje: "",
};

export default function Reservas() {
  const [formData, setFormData] = useState(estadoInicial);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/reservas", formData);

      alert(`¡Gracias ${formData.nombre}! Tu reserva fue registrada correctamente.`);

      setFormData(estadoInicial);
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al registrar la reserva.");
    }
  };

  return (
    <>
      <Navbar />

      <main>
        {/* BANNER SUPERIOR */}
        <section className="banner-reserva">
          <h1>¿DESEA UNA RESERVACIÓN?</h1>
          <p>LLÁMENOS AL XXX XXX XXX</p>
        </section>

        {/* FORMULARIO */}
        <section className="seccion-formulario">
          <div className="contenedor-formulario">
            <h2>CONTACTO Y RESERVAS</h2>

            <p className="texto-formulario">
              Permítanos preparar una experiencia gastronómica inolvidable.
              Complete el formulario y nos comunicaremos con usted.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="fila-inputs">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  placeholder="Nombre completo"
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Correo electrónico"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fila-inputs">
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  placeholder="Teléfono"
                  onChange={handleChange}
                />

                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="fila-inputs">
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Seleccione la región
                  </option>
                  <option value="Costa">Costa</option>
                  <option value="Sierra">Sierra</option>
                  <option value="Selva">Selva</option>
                </select>

                <select
                  name="comensales"
                  value={formData.comensales}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Número de comensales
                  </option>
                  <option value="1">1 persona</option>
                  <option value="2">2 personas</option>
                  <option value="3">3 personas</option>
                  <option value="4">4 personas</option>
                  <option value="5">5 o más</option>
                </select>
              </div>

              <textarea
                name="mensaje"
                value={formData.mensaje}
                placeholder="Mensaje o solicitud especial (alergias, ocasiones especiales, preferencias...)"
                onChange={handleChange}
              />

              <button type="submit">
                ENVIAR RESERVA
              </button>

            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}