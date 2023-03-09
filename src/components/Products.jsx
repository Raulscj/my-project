import React from "react";

export default function Products() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-center">Productos</h1>
        <section className="mt-2 flex justify-evenly">
          <div className="card">
            <h3>Morrales</h3>
            <img src="" alt="" />
          </div>
          <div className="card">
            <h3>Instrumentos Musicales</h3>
            <img src="" alt="" />
          </div>
          <div className="card">
            <h3>Sonido</h3>
            <img src="" alt="" />
          </div>
          <div className="card">
            <h3>Uso Personal</h3>
            <img src="" alt="" />
          </div>
          <div className="card">
            <h3>Uso Varios</h3>
            <img src="" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
