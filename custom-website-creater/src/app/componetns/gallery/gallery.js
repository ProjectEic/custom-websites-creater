'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight, BsX } from 'react-icons/bs';

const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const images = props.images;
    setLoadedImages(images);
  }, [props]);

  const openLightbox = (index) => {

    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxOpen(false);
  };

  const navigateNext = () => {
    setCurrentImage((prevImage) => (prevImage === loadedImages.length - 1 ? 0 : prevImage + 1));
  };

  const navigatePrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? loadedImages.length - 1 : prevImage - 1));
  };

return (
    <section id="Gallery" className="p-6">
      <h2 className="headlineConfig">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loadedImages.map((image, index) => (
          <div key={index} className="relative">
            <Image
              width={500}
              height={500}
              src={image.default}
              alt="Gallery Image"
              className="w-full h-auto cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 w-100 h-100">
          <div className="relative p-4 rounded-md">
            <button
              onClick={closeLightbox}
              className="absolute top-0 right-0 m-4 text-white text-5xl cursor-pointer hover:text-gray-300 transition-colors"
            >
              <BsX />
            </button>
            <div className="flex justify-between items-center">
              <button
                onClick={navigatePrevious}
                className="text-white text-4xl cursor-pointer mr-4 hover:text-gray-300 transition-colors"
              >
                <BsArrowLeft />
              </button>
              <Image
                width={500}
                height={500}
                src={loadedImages[currentImage].default}
                alt="Gallery Image"
                className="w-full h-[80vh] object-contain border border-white rounded"
              />
              <button
                onClick={navigateNext}
                className="text-white text-4xl cursor-pointer ml-4 hover:text-gray-300 transition-colors"
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;