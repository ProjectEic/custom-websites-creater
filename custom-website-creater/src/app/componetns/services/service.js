'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Service = (service) => {
    
  const [lightboxOpen, setLightboxOpen] = useState(false);

    const handleShowIcon = (name) => {
        return <Image
            width={50}
            height={50}
            src={service.image}
            alt={name + " icon"}
            className="object-contain h-fit border border-white rounde text-gray-500"
        />;
    }

    const toggleLightbox = () => {
        setLightboxOpen(!lightboxOpen);
    }
    
    const serviceName = service.name.length > 20 ? service.name.slice(0, 20) + '...' : service.name;
    const serviceText = service.text.length > 110 ? service.text.slice(0, 110) + '...' : service.text;

    return (
        <div className="servicePreviewBox p-4 h-40vh w-[24vw] bg-[var(--third-color)] rounded-2xl" onClick={toggleLightbox}>  
            <h3 className="font-semibold text-3xl pr-4 text-[var(--main-color)]">{serviceName}</h3>
            <p className="text-gray-500 py-2 text-lg font-normal">{serviceText}</p>
            {service.hasImage ? handleShowIcon(serviceName) : <div className="h-[10vh]"></div>}

            {lightboxOpen && (
                <div className="fixed z-40 inset-0 flex-col bg-black bg-opacity-90 w-100 h-100 px-[10vw] py-[20vh]">   
                    <div className="p-4 rounded-md bg-[var(--main-color)] h-full"> 
                        {service.icon ? handleShowIcon(service.name) : <div className=""></div>}    
                        <h3 className="font-semibold text-3xl pr-4 text-[var(--onSurface-color)] text-center">{service.name}</h3>
                        <p className="text-gray-300 py-2 text-lg font-normal">{service.text}</p>
                    </div>
                </div>
            )}
        </div>
        

    )
}

export default Service;
