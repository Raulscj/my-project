import React from "react";

export default function Aboutme() {
  /* const tamaño =  */
  return (
    <div className="flex flex-col md:flex-row   items-center justify-evenly">
      <img
        className="md:w-1/2 w-36 rounded-sm"
        src="src\assets\multimedia\aboutme.jpg"
        alt="aqui va foto"
      />
      <section id="app" className="md:w-1/2">
        <h1 className="text-xs text-center m-1">¿Quienes somos?</h1>
        <p className="text-xs text-justify my-1 mx-3 leading-relaxed">
          Somos una empresa venezolana dedicada a la fabricación y distribución
          de todo lo relacionado con bolsos, estuches, morrales y protectores.
          ​Somos reconocidos por tener la capacidad de adaptarnos a la necesidad
          de nuestros clientes, evaluando su requerimiento y creando el producto
          que logre cubrir todas sus expectativas.​Nos conocen por la calidad de
          nuestros productos, por la confianza y el profesionalismo que hemos
          demostrado durante estos últimos...
        </p>
      </section>
    </div>
  );
}
