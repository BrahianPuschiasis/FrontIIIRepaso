import React from "react";

function Formulario({ nombre, animeFavorito, mensajeError, onNombreChange, onAnimeFavoritoChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          value={nombre}
          onChange={onNombreChange}
          placeholder="Nombre"
        />
      </div>
      <div>
        <input
          type="text"
          value={animeFavorito}
          onChange={onAnimeFavoritoChange}
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
