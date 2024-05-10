import React, { useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const ImageItem = ({ image, index, openLightbox, text }) => {
    const hoverImageShowText = useAnimation();
    const imgRef = useRef(null);
    const handleHoverStart = () => {
    hoverImageShowText.start({
        opacity: 1,
        display: "block",
        padding: "2.5%",
        backgroundColor: "var(--onMain-color)",
        color: "var(--main-color)",
        fontWeight: "bold",
        lineHeight: "1.5",
    });
    };

    const handleHoverEnd = () => {
    hoverImageShowText.start({
        opacity: 0,
        display: "none",
        padding: "0%",
        backgroundColor: "transparent",
        color: "transparent",
        fontWeight: "thin",
        lineHeight: "1",
    });
    };

 
    const isInView = useInView(imgRef, { once: true });
    return (
        <motion.div
            key={index}
            ref={imgRef}
            className="imageContainer relative"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            initial={isInView? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            animate={isInView? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.6, delay: 0.1, damping: 15, stiffness: 105, type: "spring", ease: "easeIn"}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
        >
            <Image
                width={500}
                height={500}
                src={image.default}
                alt="Gallery Image"
                className="w-full h-auto cursor-pointer transition-transform transform rounded-[7px] hover:rounded"
                onClick={() => openLightbox(index)}
            />
            <motion.span
                className="rounded-b-xl relative p-0 bg-transparent text-transparent bottom-[1.4%] w-inherit"
                initial={{ opacity: 0, display: "none" }}
                animate={hoverImageShowText}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
            {text}
            </motion.span>
        </motion.div>
    );
};

export default ImageItem;