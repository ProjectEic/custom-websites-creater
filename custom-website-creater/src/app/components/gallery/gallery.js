import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight, BsX } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import ImageItem from "./img_item";

const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);
  const [swipeDirection, setSwipeDirection] = useState("-150vw");

  useEffect(() => {
    const images = props.images;
    setLoadedImages(images);
  }, [props]);

  const controls = useAnimation();

  const preventToggleLightbox = (e) => {
      e.stopPropagation();
      console.log(e)
  }

  useEffect(() => {
    if (lightboxOpen) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.9 });
    }
  }, [lightboxOpen, controls]);

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
    setSwipeDirection("-150vw");
  };

  const navigatePrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? loadedImages.length - 1 : prevImage - 1));
    setSwipeDirection("150vw");
  };

  return (
    <section id="Gallery" className="p-6">
      <h2 className="headlineConfig">Gallerie</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loadedImages.map((image, index) => (
          <ImageItem key={index} image={image} index={index} openLightbox={openLightbox} text={props.text?props.text[index]:""}/>
        ))}
      </div>
      {lightboxOpen && (
        <motion.div 
          initial={{ opacity: 1, scale: 1.0015}}
          animate={controls}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2, delay: 0.1}}
          onClick={closeLightbox}
          className="fixed inset-0 flex items-center justify-center bg-[var(--background-color)] bg-opacity-90 w-100 h-100 pt-[10vh]"
        >
          <motion.div 
            initial={{ opacity: 0, y: "-100vh", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: "-100vh", scale: 0.9 }}
            transition={{ duration: 0.2, delay: 0.2, bounce: 5, damping: 10, stiffness: 105}}
            onClick={preventToggleLightbox}
            className="relative p-4 rounded-md"
          >
            <motion.button
              onClick={closeLightbox}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-0 right-0 m-4 text-[var(--onBackground-color)] text-5xl cursor-pointer transition-colors"
            >
              <BsX />
            </motion.button>
            <div className="flex justify-between items-center">
               <motion.button
                onClick={navigatePrevious}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="text-[var(--onBackground-color)] text-4xl cursor-pointer mr-4 transition-colors"
              >
                <BsArrowLeft />
              </motion.button>
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, x: swipeDirection }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -swipeDirection }} 
                transition={{ duration: 0.3, stiffness: 200, ease: "easeInOut"}}
              >
                <Image
                  width={500}
                  height={500}
                  src={loadedImages[currentImage].default}
                  alt="Gallery Image"
                  className="w-full h-[80vh] object-contain rounded"
                />
                <p className="rounded-b-xl word-break" > {props.text?props.text[currentImage]:""} </p> 
              </motion.div>
              <motion.button
                onClick={navigateNext}              
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="text-[var(--onBackground-color)] text-4xl cursor-pointer ml-4 transition-colors"
              >
                <BsArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
