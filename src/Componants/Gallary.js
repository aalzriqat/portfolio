import React from "react";
import IMAGES from "../data/images";
import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";

const Gallary = () => {
  return (
    <div className="container">
      {IMAGES.map(imageObject => (
        <Image key={imageObject.id} src={imageObject.image} desc={imageObject.description} />
      ))}
    </div>
  );
};

const Image = ({ src, desc }) => {
  return (
    <div className="gallary">
      <a target="_blank" rel="noreferrer" href={src}>
        <ImageShadow src={src} />
      </a>
      <p>{desc}</p>
    </div>
  );
};

export default Gallary;