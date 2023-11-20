import React from "react";
import Image from "next/image";
const Slide = (props) => {
  return (
    <div>
      <h2 className="text">Slide number: {props.id}</h2>
      <p className="text">{props.text}</p>
      <Image
        className="image"
        src={props.imageURL}
        width={1280}
        height={720}
        alt="Slide image"
      />

      <audio className="block" controls src={props.audioURL}></audio>
    </div>
  );
};

export default Slide;
