"use client";
import React from "react";
import Gallery from "./gallery";

const importAll = (r) => {
  return r.keys().map((key) => ({
    path: key,
    default: r(key).default,
  }));
}

const FileGallery = () => {;
  const images = importAll(require.context(`./img`, false, /\.(png|jpe?g|svg)$/));
  
  return (
    <Gallery 
      images={images}
      text={images.map((image) => image.path.split("/").pop().split(".")[0])}
    />
  );
};

export default FileGallery;