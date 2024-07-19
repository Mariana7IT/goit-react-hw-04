import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";


const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={s.imageGallery}>
      {images.map((image) => (
        <div
          key={image.id}
          className={s.imageGalleryItem}
          onClick={() => onImageClick(image)}
        >
          <img src={image.urls.small} alt={image.alt_description} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
