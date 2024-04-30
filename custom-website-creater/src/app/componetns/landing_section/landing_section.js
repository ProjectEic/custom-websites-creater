"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Landing = (props) => {
    return (
        <main id="Landing" className="h-[92vh]">
            <motion.div 
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="landingHeadline absolute bottom-5 left-5 p-5 bg-[--main-color] rounded-xl max-w-[50%]"
            >
                <h2 className="font-serif font-semibold font-size text-6xl tracking-wide pb-4">
                    {props.headline}
                </h2>
                <p className="text-gray-300">
                    {props.aboutText}
                </p>
            </motion.div>
        </main>
    );
}

export default Landing;
