"use-client"
import React, { useState, useRef } from "react";
import { BsX } from "react-icons/bs";
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

    const reviewName = review.name.length > 50 ? review.name.slice(0, 50) + "..." : review.name;
    const reviewText = review.text.length > 150 ? review.text.slice(0, 150) + "..." : review.text;

    const reviewRef = useRef(null);
    const isInView = useInView(reviewRef, { once: true });
    const initialAnimation = { scale: .5, rotate: -25, opacity: 0 };
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
            className="review p-4 bg-[var(--third-color)] rounded-2xl text-[var(--onThird-color)] w-[25%] cursor-pointer" 
            onClick={toggleLightbox}
        >

            <h3 className="font-semibold text-3xl pr-4"> {reviewName} </h3>
            <p className="opacity-80 py-2 text-lg font-normal leading-tight"> {reviewText} </p>
            {lightboxOpen && (
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={lightboxVariants}
                    transition={{ duration: 0.2, delay: 0.4, bounceStiffness: 300, clamp: 20}}
                    className="fixed z-40 inset-0 flex-col bg-[var(--background-color)] bg-opacity-90 px-[10vw] py-[10vh]"
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
                        <h3 className="font-semibold text-3xl pr-4 text-center text-[var(--onMain-color)]"> {review.name} </h3>
                        <p className="text-[var(--onMain-color)] opacity-85 py-2 text-lg font-normal"> {review.text} </p>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={toggleLightbox}
                            className="text-[var(--onBackground-color)] absolute top-2 right-2 text-5xl cursor-pointer hover:opacity-80 transition-all"
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