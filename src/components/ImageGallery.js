import React from "react";
import GalleryItem from './ImageGalerryItem.js';

const GalleryList = ({ gallery }) => {
  return <ul className="ImageGallery">
{gallery.map(image =>
   <GalleryItem key={image.id} alt={image.tags} src={image.webformatURL} largeImageURL={image.largeImageURL}/>
   )}
  </ul>;
};

export default GalleryList;
