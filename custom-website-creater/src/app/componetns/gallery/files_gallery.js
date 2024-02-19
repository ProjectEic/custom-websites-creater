'use client';
import React, { useState, useEffect } from 'react';
import Gallery from './gallery';
//

function importAll(r) {
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
    />
  );
};

export default FileGallery;