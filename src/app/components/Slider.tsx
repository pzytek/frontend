"use client";

import React, { useState } from "react";
import Slide from "./Slide";

const Slider = ({ slides }) => {
  const [number, setNumber] = useState(0);
  const currentSlide = slides[number];

  const increment = () =>
    setNumber((prevState) =>
      slides.length > prevState + 1 ? prevState + 1 : 0
    );
  const decrement = () =>
    setNumber((prevState) =>
      prevState <= 1 ? slides.length - 1 : prevState - 1
    );

  return (
    <div className="slider-container">
      <button className="btn btn-left" onClick={decrement}>
        Prev
      </button>
      <button className="btn btn-right" onClick={increment}>
        Next
      </button>
      <Slide {...currentSlide} />
    </div>
  );
};

export default Slider;
