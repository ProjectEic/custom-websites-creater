"use-client"
import React from 'react'
import Image from 'next/image';

const Services = (services) => {


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
        <section>
            {(services).forEach(service => (
                <div key={service} className="p-4">
                    {props.hasIcon === true ? handleShowIcon(service) : null}
                    <h3 className="font-semibold text-3xl pr-4 text-white">{services[service].name}</h3>
                    <p className="text-gray-300 py-2 text-lg font-normal">{services[service].text}</p>
                </div>
            ))}
        </section>


    )

}

export default Services;