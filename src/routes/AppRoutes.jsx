import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "../components/Carousel";
import Aboutme from "../components/Aboutme";
import Clients from "../components/Clients";
import Products from "../components/Products";
import Reserver from "../components/Reserver";
export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Carousel />} />
          <Route exact path="/Aboutme" element={<Aboutme />} />
          <Route exact path="/Clientes" element={<Clients />} />
          <Route exact path="/Paquetes" element={<Products />} />
          <Route exact path="/Reservacion" element={<Reserver />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
