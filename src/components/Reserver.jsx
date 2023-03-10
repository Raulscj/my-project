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
        className=" bg h-1/2 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <input
          className=" p-4 m-2 w-1/2"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Nombre completo"
          required
        />
        <input
          className=" p-4 m-2 w-1/2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="@gmail.com"
          id="email"
          name="email"
          required
        />
        <input
          className=" p-4 m-2 w-1/2"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          placeholder="0416/0412/0414"
          id="Telefono"
          name="Telefono"
          required
        />
        <button type="submit">Suscribirse</button>
      </form>
    </>
  );
}
