import React, { useState } from "react";
import Card from "./Card";
import Formulario from "./Formulario"; // Asegúrate de tener la ruta correcta a tu componente Formulario
import "./index.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [animeFavorito, setAnimeFavorito] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);

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
      setMostrarCard(true);
    }
  };

  return (
    <div className="App">
      <h1>Formulario</h1>
      <Formulario
        nombre={nombre}
        animeFavorito={animeFavorito}
        mensajeError={mensajeError}
        onNombreChange={handleNombreChange}
        onAnimeFavoritoChange={handleAnimeFavoritoChange}
        onSubmit={handleSubmit}
      />
      {mostrarCard && <Card title={nombre} content={animeFavorito} />}
    </div>
  );
}

export default App;
