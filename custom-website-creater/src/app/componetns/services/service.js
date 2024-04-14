import React from 'react';
import Image from 'next/image';

const Service = (service) => {
    const handleShowIcon = (name) => {
        return <Image
            width={50}
            height={50}
            src={"https://google.com/placeholder_img.png"}
            alt={name + " icon"}
            className="object-contain h-fit border border-white rounde text-gray-500"
        />;
    }
    
    const serviceName = service.name.length > 20 ? service.name.slice(0, 20) + '...' : service.name;
    const serviceText = service.text.length > 110 ? service.text.slice(0, 110) + '...' : service.text;

    return (
        <div className="p-4 h-40vh w-[24vw] bg-[var(--third-color)] rounded-2xl">
            <h3 className="font-semibold text-3xl pr-4 text-[var(--main-color)]">{serviceName}</h3>
            <p className="text-gray-500 py-2 text-lg font-normal text-[var(--onThird-color)]">{serviceText}</p>
            {service.icon ? handleShowIcon(serviceName) : <div className="h-[10vh]"></div>}
        </div>

    )
}

export default Service;
