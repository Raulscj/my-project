import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import second from '../components/Navbar'
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
          <Route path='/' element={<Navbar/>}>
          <Route index element={<Carousel />} />
          <Route exact path="/Aboutme" element={<Aboutme />} />
          <Route exact path="/Clientes" element={<Clients />} />
          <Route exact path="/Paquetes" element={<Products />} />
          <Route exact path="/Reservacion" element={<Reserver />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
