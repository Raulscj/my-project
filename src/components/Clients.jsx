import React from "react";
import Cards from "./Cards";
import { v4 as uuidv4 } from "uuid";
const clientes = [
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\1.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\2.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\3.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\4.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\5.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\6.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\7.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\8.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\9.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\10.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\11.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\12.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\13.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\14.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\15.png",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Clientes\\16.png",
  },
];

export default function Clients() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 p-5 lg:flex-row lg:flex-wrap">
        {clientes.map((cliente) => (
          <Cards key={cliente.id}>{cliente.path}</Cards>
        ))}
      </div>
    </>
  );
}
