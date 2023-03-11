import React, { useState } from "react";

export default function Reserver() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, number);
  };
  return (
    <>
      <form
        className="bg-teal-800 flex flex-col items-center justify-center mx-3 p-2 mt-10 "
        onSubmit={handleSubmit}
      >
        <input
          className="text-xs p-2 m-1"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Nombre completo"
          required
        />
        <input
          className="text-xs p-2 m-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="@gmail.com"
          id="email"
          name="email"
          required
        />
        <input
          className="text-xs p-2 m-1"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          placeholder="0416/0412/0414"
          id="Telefono"
          name="Telefono"
          required
        />
        <button
          type="submit"
          className="bg-blue-900 hover:bg-teal-900 p-2 rounded-xl text-xs"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
