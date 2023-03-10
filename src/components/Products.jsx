import React, { useState } from "react";
import Morrales from "../assets/multimedia/Productos/Morrales.jpg";
import MorralesHover from "../assets/multimedia/Productos/Morrales2.jpg";
import Instrumentos from "../assets/multimedia/Productos/Instrumentos.jpg";
import InstrumentosHover from "../assets/multimedia/Productos/Instrumentos2.jpg";
import Personal from "../assets/multimedia/Productos/Personal.jpg";
import PersonalHover from "../assets/multimedia/Productos/Personal2.jpg";
import Sonido from "../assets/multimedia/Productos/Sonido.jpg";
import SonidoHover from "../assets/multimedia/Productos/Sonido2.jpg";
import Varios from "../assets/multimedia/Productos/Varios.jpg";
import VariosHover from "../assets/multimedia/Productos/Varios2.jpg";

export default function Products() {
  const [MorralesImage, setMorralesImage] = useState(Morrales);
  const [InstrumentosImage, setInstrumentosImage] = useState(Instrumentos);
  const [SonidoImage, setSonidoImage] = useState(Sonido);
  const [PersonalImage, setPersonalImage] = useState(Personal);
  const [VariosImage, setVariosImage] = useState(Varios);
  const handleHover = (image, setImage) => {
    setImage(image);
  };
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-center text-lg font-bold">Productos</h1>
        <section className="flex flex-col items-center justify-center gap-5 p-5">
          <div className="card">
            <h3 className="text-lg">Morrales</h3>
            <img
              className="rounded-xl"
              onMouseOver={() => handleHover(MorralesHover, setMorralesImage)}
              onMouseOut={() => handleHover(Morrales, setMorralesImage)}
              src={MorralesImage}
              alt=""
            />
          </div>
          <div className="card">
            <h3 className="text-lg">Instrumentos Musicales</h3>
            <img
              className="rounded-xl"
              onMouseOver={() =>
                handleHover(InstrumentosHover, setInstrumentosImage)
              }
              onMouseOut={() => handleHover(Instrumentos, setInstrumentosImage)}
              src={InstrumentosImage}
              alt=""
            />
          </div>
          <div className="card">
            <h3 className="text-lg">Sonido</h3>
            <img
              className="rounded-xl"
              onMouseOver={() => handleHover(SonidoHover, setSonidoImage)}
              onMouseOut={() => handleHover(Sonido, setSonidoImage)}
              src={SonidoImage}
              alt=""
            />
          </div>
          <div className="card">
            <h3 className="text-lg">Uso Personal</h3>
            <img
              className="rounded-xl"
              onMouseOver={() => handleHover(PersonalHover, setPersonalImage)}
              onMouseOut={() => handleHover(Personal, setPersonalImage)}
              src={PersonalImage}
              alt=""
            />
          </div>
          <div className="card">
            <h3 className="text-lg">Uso Varios</h3>
            <img
              className="rounded-xl"
              onMouseOver={() => handleHover(VariosHover, setVariosImage)}
              onMouseOut={() => handleHover(Varios, setVariosImage)}
              src={VariosImage}
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
}
