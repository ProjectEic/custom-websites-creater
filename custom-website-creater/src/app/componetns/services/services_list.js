"use client"
import Service from "./service";
import React from 'react';

const Services = ({ services }) => {
    return (
        <section className="p-6" id="Services">
            <h2 className="headlineConfig">Services</h2>
            <div className="flex gap-4">
              {services.map((service, index) => (
                    <Service
                        key={index}
                        name={service.name}
                        text={service.text}
                        image={service.image}
                        hasImage={service.hasImage}
                    />
                ))}
            </div>
        </section>
    )
}

export default Services;
