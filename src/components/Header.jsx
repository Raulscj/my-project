import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-20 min-h-screen  ">
      <header
        id="header"
        className="m-2 flex flex-row justify-between items-center  p-5 rounded-md h-20 opacity-70"
      >
        <img
          className="w-10 h-14"
          src="src\assets\multimedia\Logo.png"
          alt="Logotype"
        />
        <div className="w-1/3 flex justify-evenly items-center">
          <Link to={"https://www.facebook.com/Fabrica-DT-275096182506091/"}>
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </Link>
          <Link to={"https://www.instagram.com/fabricadtca/"}>
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </Link>
          <Link to={"https://twitter.com/negociosjackson"}>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
