"use-client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { BsX } from 'react-icons/bs';
import { motion, useInView } from "framer-motion";


const Review = (review) => {

      
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const toggleLightbox = () => {
        setLightboxOpen(!lightboxOpen);
    }
    
    const preventToggleLightbox = (e) => {
        e.stopPropagation();
        console.log(e)
    }

    const handleShowIcon = () => {
        return <Image
                width={50}
                height={50}
                src={"https://google.com/placeholder_img.png"}
                alt={review.name + " icon"}
                className="object-contain border border-white rounded"
              />;
    }
    const reviewName = review.name.length > 50 ? review.name.slice(0, 50) + '...' : review.name;
    const reviewText = review.text.length > 150 ? review.text.slice(0, 150) + '...' : review.text;

    const reviewRef = useRef(null);
    const isInView = useInView(reviewRef, { once: true });
    const initialAnimation = { scale: .25, rotate: -45, opacity: 0 };
    const animateAnimation = { scale: 1, rotate: 0, opacity: 1 };
    const transitionAnimation = { duration: 0.2, ease: "easeInOut" };
    const lightboxVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    return (
        <motion.div 
            initial={isInView ? animateAnimation : initialAnimation}
            animate={isInView ? animateAnimation : initialAnimation}
            transition={transitionAnimation}
            whileHover={!lightboxOpen ? { backgroundColor: "var(--main-color)", color: "var(--third-color)", scale: 1.025 } : {}}
            whileTap={!lightboxOpen ? { scale: .95 } : {}}
            ref={reviewRef}
            className="p-4 bg-[var(--third-color)] rounded-2xl text-[var(--main-color)] w-[25%]" 
            onClick={toggleLightbox}
        >
            {review.hasIcon === true ? handleShowIcon() : <div className=""/>}
            <h3 className="font-semibold text-3xl pr-4 text-[var(--surface-color)]"> {reviewName} </h3>
            <p className="text-gray-500 py-2 text-lg font-normal leading-tight"> {reviewText} </p>
            {lightboxOpen && (
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={lightboxVariants}
                    transition={{ duration: 0.2, delay: 0.4, bounceStiffness: 300, clamp: 20}}
                    className="fixed z-40 inset-0 flex-col bg-black bg-opacity-90 px-[10vw] py-[10vh]"
                    onClick={toggleLightbox}
                >
                    <motion.div 
                        initial={{ opacity: 1, y: "-100vh", scale: 0 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: "-100vh", scale: 0.9 }}
                        transition={{ duration: 0.2, delay: 0.2, bounce: 5, damping: 10, stiffness: 105}}
                        className="p-4 rounded-md bg-[var(--main-color)] h-full"
                        onClick={preventToggleLightbox}
                    >
                        {review.hasIcon ? handleShowIcon(review.name) : <div className=""></div>}    
                        <h3 className="font-semibold text-3xl pr-4 text-center text-[var(--onSurface-color)]"> {review.name} </h3>
                        <p className="text-gray-300 py-2 text-lg font-normal"> {review.text} </p>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={toggleLightbox}
                            className="absolute top-[12%] right-[12%] text-white text-5xl cursor-pointer hover:text-gray-300 transition-colors"
                        >
                            <BsX/>
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
}

export default Review;