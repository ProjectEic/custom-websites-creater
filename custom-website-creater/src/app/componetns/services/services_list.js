"use client"
import Service from "./service";
import React from "react";

const Services = ({ services }) => {
    return (
        <section className="p-6" id="Services">
            <h2 className="headlineConfig">Dienstleistungen</h2>
            <div className="servicesContainer flex gap-4">
              {services.map((service, index) => (
                    <Service
                        key={index}
                        name={service.name}
                        text={service.text}
                        image={service.image}
                        hasImage={service.hasImage}
                        link={service.link}
                        linkText={service.linkText}
                    />
                ))}
            </div>
        </section>
    )
}

export default Services;
