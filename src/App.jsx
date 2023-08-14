import React, { useState } from "react";
import Card from "./Card"; // Asegúrate de tener la ruta correcta a tu componente Card
import "./index.css"; // Importa los estilos CSS aquí

function App() {
  const [nombre, setNombre] = useState("");
  const [animeFavorito, setAnimeFavorito] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false); // Agregamos el estado para controlar la renderización de la Card

  const handleNombreChange = (event) => {
    const newNombre = event.target.value;
    setNombre(newNombre);
    setMensajeError("");
    setMostrarCard(false);
  };

  const handleAnimeFavoritoChange = (event) => {
    const newAnimeFavorito = event.target.value;
    setAnimeFavorito(newAnimeFavorito);
    setMensajeError("");
    setMostrarCard(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.length < 3 || /^\s/.test(nombre)) {
      setMensajeError("Por favor ingresa un nombre válido con al menos 3 caracteres y sin espacios al comienzo");
    } else if (animeFavorito.length < 6) {
      setMensajeError("Por favor ingresa un anime favorito con al menos 6 caracteres");
    } else {
      setMensajeError("");
      setMostrarCard(true); // Mostrar la Card cuando las condiciones se cumplan
    }
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Nombre"
          />
        </div>
        <div>
          <input
            type="text"
            value={animeFavorito}
            onChange={handleAnimeFavoritoChange}
            placeholder="Anime Favorito"
          />
        </div>
        <button type="submit" className="blue-button">
          Enviar
        </button>
        {mensajeError && <p>{mensajeError}</p>}
      </form>
      {mostrarCard && <Card title={nombre} content={animeFavorito} />} {/* Renderizar la Card cuando mostrarCard sea verdadero */}
    </div>
  );
}

export default App;
