import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const boton = document.querySelector('#btn_nav')
const menu = document.querySelector('#menu')
boton.addEventListener('click',()=>{
  menu.classList.toggle('hidden')
})
export default function Navbar() {
  return (
    <>
      <nav className="w-28">
        <button id='btn_nav' className="m-2 bg-gray-700 hover:bg-gray-900 text-white py-2 px-3 rounded-md lg:hidden">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul id="menu" className="bg-green-400 px-2 py-4">
          <li>
            <a className="uppercase text-xs" href=""> Inicio</a> 
          </li>
          <li>
            <a className="uppercase text-xs" href="">¿Quienes somos?</a> 
          </li>
          <li>
            <a className="uppercase text-xs" href="">Nuestros Clientes</a> 
          </li>
          <li>
            <a className="uppercase text-xs" href="">Productos </a> 
          </li>
          <li>
            <a className="uppercase text-xs" href="">Como comprar</a> 
          </li>
        </ul>
      </nav>
    </>
  );
}
