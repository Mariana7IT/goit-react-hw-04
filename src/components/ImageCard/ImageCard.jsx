import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={s.imageCard} onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
