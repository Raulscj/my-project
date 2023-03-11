import React from "react";
import Carousel from "./Carousel";
import { v4 as uuidv4 } from "uuid";
const slides = [
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Carousel\\1.jpg",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Carousel\\2.jpg",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Carousel\\3.jpg",
  },
  {
    id: uuidv4(),
    path: "src\\assets\\multimedia\\Carousel\\4.jpg",
  },
];
export default function Home() {
  return (
    <>
      <div className="mx-auto p-4 mt-16">
        <Carousel>
          {slides.map((s) => (
            <img key={s.id} src={s.path} />
          ))}
        </Carousel>
      </div>
    </>
  );
}
