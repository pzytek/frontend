import React, { useState } from "react";
import Slider from "../components/Slider";

type Slide = {
  id: number;
  text: string;
  imageURL: string;
  audioURL: string;
};

const getSlides = async (): Promise<Slide[]> => {
  const res = await fetch(`http://localhost:5000/api/slides`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data.slides;
};

const page = async () => {
  const slides = await getSlides();
  const slide = slides[0];

  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default page;
