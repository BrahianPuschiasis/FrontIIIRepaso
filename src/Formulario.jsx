import React, { useState } from "react";

function Formulario({ onSubmit }) {
  const [nombre, setNombre] = useState("");
  const [animeFavorito, setAnimeFavorito] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const handleNombreChange = (event) => {
    const newNombre = event.target.value;
    setNombre(newNombre);
    setMensajeError("");
  };

  const handleAnimeFavoritoChange = (event) => {
    const newAnimeFavorito = event.target.value;
    setAnimeFavorito(newAnimeFavorito);
    setMensajeError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.length < 3 || /^\s/.test(nombre)) {
      setMensajeError("Por favor ingresa un nombre válido con al menos 3 caracteres y sin espacios al comienzo");
    } else if (animeFavorito.length < 6) {
      setMensajeError("Por favor ingresa un anime favorito con al menos 6 caracteres");
    } else {
      setMensajeError("");
      onSubmit(nombre, animeFavorito);
    }
  };

  return (
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
  );
}

export default Formulario;
