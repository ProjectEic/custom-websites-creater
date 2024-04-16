"use client";
import React from 'react';

const Header = ({ elements }) => {

    // make this perhaps a paramter
    const positionLastElement = elements.length -1;

    return (
        <header className="text-[var(--onMain-color)] h-[8vh]">
            <nav className="container fixed z-10 max-w-none">
                <ul className="items-center flex justify-evenly h-[8vh] responsiveDesktopHeader">
                    {elements.map((element, index) => (
                    <li className="text-center" key={index}>
                        <a
                            href={element.href}
                            className="text-[var(--onMain-color)] hover:text-gray-300 hover:underline transition duration-300 font-bold text-2xl"
                        >
                            {element.title}
                        </a>
                    </li>
                    ))}
                </ul>
                <div className="responsiveTabletHeader items-center h-[8vh]">
                    <div className="items-center flex justify-evenly w-[90%]"> 
                    <a
                        href={elements[0].href}
                        className="text-[var(--onMain-color)] hover:text-gray-300 hover:underline transition duration-300 font-bold text-2xl"
                    >
                        {elements[0].title}
                    </a>
                    <a
                        href={elements[positionLastElement].href}
                        className="text-[var(--onMain-color)] hover:text-gray-300 hover:underline transition duration-300 font-bold text-2xl"
                    >
                        {elements[positionLastElement].title}
                    </a>
                    </div>
                    <div class="burgerIcon w-[10%] justify-end">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <ul className="flex flex-col items-center toggleDisplayNone">
                        {elements.slice(1, elements.length - 1).map((element, index) => (
                        <li className="text-center" key={index}>
                            <a
                            href={element.href}
                            className="text-[var(--onMain-color)] hover:text-gray-300 hover:underline transition duration-300 font-bold text-2xl"
                            >
                            {element.title}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="responsiveMobileHeader">
                    <a
                        href={elements[0].href}
                        className="text-[var(--onMain-color)] hover:text-gray-300 hover:underline transition duration-300 font-bold text-2xl"
                    >
                        {elements[0].title}
                    </a>
                    <ul className="flex flex-col items-center">
                        {elements.slice(1).map((element, index) => (
                        <li className="text-center" key={index}>
                            <a
                            href={element.href}
                            className="text-[var(--onMain-color)] hover:text-gray-300 hover:underline transition duration-300 font-bold text-2xl"
                            >
                            {element.title}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>

            </nav>
        </header>
    );
};

export default Header;

