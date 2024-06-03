"use-client"
import React, { useState, useRef } from "react";
import Image from "next/image";
import { BsX } from "react-icons/bs";
import { motion, useInView } from "framer-motion";

const Service = (service) => {

    const [lightboxOpen, setLightboxOpen] = useState(false);

    const handleShowIcon = () => {
        return <Image
            width={50}
            height={50}
            src={service.image}
            alt={"Bild zur Dienstleistung konnte nicht geladen werden."}
            className="object-contain w-[80%] pl-[10%] rounded-2xl text-gray-500"
        />;
    }

    const toggleLightbox = (e) => {
        e.stopPropagation();
        setLightboxOpen(!lightboxOpen);
    }

    const preventToggleLightbox = (e) => {
        e.stopPropagation();
        console.log(e)
    }

    // const serviceName = service.name.length > 20 ? service.name.slice(0, 20) + "..." : service.name;
    const serviceText = service.text.length > 110 ? service.text.slice(0, 110) + "..." : service.text;

    const serviceRef = useRef(null);
    const isInView = useInView(serviceRef, { once: true });
    const initialAnimation = { scale: .25, rotate: -45, opacity: 0 };
    const animateAnimation = { scale: 1, rotate: 0, opacity: 1 };
    const transitionAnimation = {
        type: "spring",
        stiffness: 250,
        damping: 20,
        delay: 0.1,
        transition: 0.5
    };
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
            ref={serviceRef}
            className="servicePreviewBox p-4 min-h-40vh w-[100%] bg-[var(--third-color)] rounded-2xl text-[var(--onThird-color)] cursor-pointer" 
            onClick={(e) => toggleLightbox(e)}
        >
            <h3 className="font-semibold text-3xl pr-4 word-break">{service.name}</h3>
            <p className="opacity-80 py-2 text-lg font-normal leading-tigh">{serviceText}</p>
            {service.hasImage ? handleShowIcon() : <div className="h-[10vh]"></div>}

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
                        initial={{ opacity: 1, y: "-100vh", scale: 0}}
                        animate={{ opacity: 1, y: "0vh", scale: 1 }}
                        exit={{ opacity: 0, y: "-100vh", scale: 0.9 }}
                        className="p-4 rounded-md bg-[var(--main-color)] h-full"
                        onClick={preventToggleLightbox}
                    > 
                        <h3 className="font-semibold text-3xl pr-4 text-[var(--onMain-color)] text-center">{service.name}</h3>
                        <p className="text-[var(--onMain-color)] opacity-85 py-2 text-lg font-normal">{service.text}</p>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={toggleLightbox}
                            className="absolute top-2 right-2 text-[var(--onBackground-color)] text-5xl cursor-pointer hover:opacity-85 transition-colors"
                        >
                            <BsX/>
                        </motion.button>
                        {service.link && <a className="text-[var(--onBackground-color)] absolute bottom-4 left-4 underline hover:opacity-85" onClick={toggleLightbox} href={service.link}>{service.linkText}</a>}
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
}

export default Service;
