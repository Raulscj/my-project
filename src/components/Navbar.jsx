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
      <div id="menu" className=" flex justify-center min-h-screen w-1/4">
        <button
          id="btn_nav"
          className="absolute bg-gray-700 hover:bg-gray-900 text-white py-2 px-3 rounded-md lg:hidden "
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <nav
          id="menu"
          className={`flex flex-col w-full px-2  text-center text-white h-screen justify-evenly ${
            menu ? "" : "hidden"
          }`}
        >
          <Link to={"/"}>
            <span className="w-full  uppercase text-xs hover:bg-slate-400 p-2 ">
              Inicio
            </span>
          </Link>
          <Link to={"/Aboutme"}>
            <span className="w-full  uppercase text-xs hover:bg-slate-400 p-2 ">
              ¿Quienes somos?
            </span>
          </Link>
          <Link to={"/Clientes"}>
            <span className="w-full  uppercase text-xs hover:bg-slate-400 p-2 ">
              Nuestros Clientes
            </span>
          </Link>
          <Link to={"/Paquetes"}>
            <span className="w-full  uppercase text-xs hover:bg-slate-400 p-2">
              Productos{" "}
            </span>
          </Link>
          <Link to={"/Reservacion"}>
            <span className="w-full  uppercase text-xs hover:bg-slate-400 p-2 ">
              Quiero el mio
            </span>
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
