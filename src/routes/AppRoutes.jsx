import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Home from "../components/Home";
import Aboutme from "../components/Aboutme";
import Clients from "../components/Clients";
import Products from "../components/Products";
import Reserver from "../components/Reserver";
import NotFound from "../components/NotFound";
export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route exact path="/Aboutme" element={<Aboutme />} />
              <Route exact path="/Clientes" element={<Clients />} />
              <Route exact path="/Paquetes" element={<Products />} />
              <Route exact path="/Reservacion" element={<Reserver />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
