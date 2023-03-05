import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { React, useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <>
      <button
        id="btn_nav"
        className=" m-2 bg-gray-700 hover:bg-gray-900 text-white py-2 px-3 rounded-md lg:hidden "
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      <nav
        id="menu"
        className={`flex flex-col px-2 fixed w-28 bg-slate-500 text-center h-screen justify-around ${
          menu ? "" : "hidden"
        }`}
      >
        <a
          className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400"
          href=""
        >
          Inicio
        </a>
        <a
          className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400"
          href=""
        >
          ¿Quienes somos?
        </a>
        <a
          className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400"
          href=""
        >
          Nuestros Clientes
        </a>
        <a
          className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400"
          href=""
        >
          Productos{" "}
        </a>
        <a
          className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400"
          href=""
        >
          Como comprar
        </a>
      </nav>
    </>
  );
}
