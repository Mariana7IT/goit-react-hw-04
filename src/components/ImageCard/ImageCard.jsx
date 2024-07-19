import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <li className={s.card} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} className={s.image} />
    </li>
  );
};

export default ImageCard;
