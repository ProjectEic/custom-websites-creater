"use client";
import React from 'react';

const Header = ({ elements }) => {

  return (
    <header className="text-white h-[8vh]">
        <nav className="container fixed z-10 max-w-none">
            <ul className="items-center flex justify-evenly h-[8vh]">
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

