"use client";
import React from 'react';

const Header = ({ elements }) => {
  return (
    <header className="text-white py-4">
        <nav className="container mx-auto">
            <ul className={`grid grid-cols-${elements.length} justify-evenly`}>
                {elements.map((element, index) => (
                <li className="text-center" key={index}>
                    <a
                        href={element.href}
                        className="text-white hover:text-gray-300 hover:underline transition duration-300 font-bold text-2xl"
                    >
                        {element.title}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
    </header>
  );
};

export default Header;

