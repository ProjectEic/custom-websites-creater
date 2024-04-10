import React from 'react';
import Image from 'next/image';

const Services = ({ services }) => {
    const handleShowIcon = (name) => {
        return <Image
            width={50}
            height={50}
            src={"https://google.com/placeholder_img.png"}
            alt={name + " icon"}
            className="object-contain border border-white rounded"
        />;
    }

    return (
        <section className="p-6">
            <h2 className="headlineConfig">Services</h2>
            <div className="flex gap-4">
                {Object.keys(services).map(serviceKey => (
                    <div key={serviceKey} className="p-4 h-30vh bg-[var(--third-color)] rounded-2xl">
                        {services[serviceKey].hasIcon === true ? handleShowIcon(serviceKey) : <div className="h-[15vh]"></div>}
                        <h3 className="font-semibold text-3xl pr-4 text-[var(--onThird-color)]">{services[serviceKey].name}</h3>
                        <p className="text-gray-300 py-2 text-lg font-normal text-[var(--onThird-color)]">{services[serviceKey].text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services;
