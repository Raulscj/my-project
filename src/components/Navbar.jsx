import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <nav class="w-28">
        <button class="m-2 bg-gray-700 hover:bg-gray-900 text-white py-2 px-3 rounded-md">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul className="bg-green-400 px-2 py-4">
          <li className="uppercase text-xs" href="">
            Inicio
          </li>
          <li className="uppercase text-xs" href="">
            ¿Quienes somos?
          </li>
          <li className="uppercase text-xs" href="">
            Nuestros Clientes
          </li>
          <li className="uppercase text-xs" href="">
            Productos
          </li>
          <li className="uppercase text-xs" href="">
            Como comprar
          </li>
        </ul>
      </nav>
    </>
  );
}
