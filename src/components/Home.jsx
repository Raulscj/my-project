import React from "react";
import Carousel from "./Carousel";
import { v4 as uuidv4 } from "uuid";
const slides = [
  {
    id: uuidv4(),
    path: "https://i.ibb.co/ncrXc2V/1.png",
  },
  {
    id: uuidv4(),
    path: "https://i.ibb.co/B3s7v4h/2.png",
  },
  {
    id: uuidv4(),
    path: "https://i.ibb.co/XXR8kzF/3.png",
  },
  {
    id: uuidv4(),
    path: "https://i.ibb.co/yg7BSdM/4.png",
  },
];
export default function Home() {
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <Carousel>
          {slides.map((s) => (
            <img key={s.id} src={s.path} />
          ))}
        </Carousel>
      </div>
    </>
  );
}
