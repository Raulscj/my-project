import React /* , { useState, useEffect } */ from "react";
const clientes = [
  {
    id: 1,
    path: "src\\assets\\multimedia\\Clientes\\1.png",
    titulo: "Codina Eventos",
  },
  {
    id: 2,
    path: "src\\assets\\multimedia\\Clientes\\2.png",
    titulo: "",
  },
  {
    id: 3,
    path: "src\\assets\\multimedia\\Clientes\\3.png",
    titulo: "",
  },
  {
    id: 4,
    path: "src\\assets\\multimedia\\Clientes\\4.png",
    titulo: "",
  },
  {
    id: 5,
    path: "src\\assets\\multimedia\\Clientes\\5.png",
    titulo: "",
  },
  {
    id: 6,
    path: "src\\assets\\multimedia\\Clientes\\6.png",
    titulo: "",
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
