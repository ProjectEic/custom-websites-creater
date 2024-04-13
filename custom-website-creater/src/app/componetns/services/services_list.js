import React from 'react';
import Service from "./service";

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
                        icon={service.icon}
                    />
                ))}
            </div>
        </section>
    )
}

export default Services;
