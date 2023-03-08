import React /* , { useState, useEffect } */ from "react";
const clientes = [
  {
    id: 1,
    path: "",
    titulo: "Good",
  },
  {
    id: 2,
    path: "",
    titulo: "Bad",
  },
];

export default function Clients() {
  return (
    <>
      {clientes.map((cliente) => (
        <div key={cliente.id} className="card small">
          <div className="card">
            <img
              className="mainPic"
              src={`${cliente.path}`}
              alt={cliente.titulo}
            />
            <div className="contenidoCard">
              <h3>{cliente.titulo}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
