"use client";
import React from 'react';

const Header = ({ elements }) => {

  return (
    <header className="text-white">
        <nav className="container fixed h-15vh z-10 py-4 max-w-none">
            <ul className={`flex justify-evenly`}>
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

