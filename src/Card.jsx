import React from "react";
import "./index.css"; // Asegúrate de importar los estilos CSS aquí

function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">Hola {props.title} !</h2>
        <p className="card-content">Sabemos que tu anime favorito es: {props.content}</p>
      </div>
    </div>
  );
}

export default Card;
