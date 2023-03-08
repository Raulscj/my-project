import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { React, useState } from "react";
import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <>
      <div className="bg-slate-500 flex justify-center h-screen w-1/4">
        <button
          id="btn_nav"
          className="absolute bg-gray-700 hover:bg-gray-900 text-white py-2 px-3 rounded-md lg:hidden "
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <nav
          id="menu"
          className={`flex flex-col px-2 bg-slate-500 text-center h-screen justify-evenly ${
            menu ? "" : "hidden"
          }`}
        >
          <Link to={"/"}>
            <a className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400">
              Inicio
            </a>
          </Link>
          <Link to={"/Aboutme"}>
            <a className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400">
              ¿Quienes somos?
            </a>
          </Link>
          <Link to={"/Clientes"}>
            <a className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400">
              Nuestros Clientes
            </a>
          </Link>
          <Link to={"/Paquetes"}>
            <a className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400">
              Productos{" "}
            </a>
          </Link>
          <Link to={"/Reservacion"}>
            <a className="w-full  uppercase text-xs hover:bg-slate-400 p-2 border-b-4 border-slate-400">
              Como comprar
            </a>
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
