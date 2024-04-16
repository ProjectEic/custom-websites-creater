"use client";
import React from 'react';

const Header = ({ elements }) => {

    // make this perhaps a paramter
    const positionLastElement = elements.length -1;


    const handleClickNavSlide = () => {
        const listItems = document.querySelectorAll('.navSlide li');
        const navSlide = document.querySelector(".navSlide");
        navSlide?.classList.toggle("toggleDisplayNoneNavSlide");
        
        let navSlideList = Array.prototype.filter.call(listItems, f => !f.classList.contains('toggleDisplay'));  

        navSlideList.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinksFade 500ms ease forwards ${index / 9 + 0.5}s`;
            }
        });
    }

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
                <ul className="flex flex-col items-center toggleDisplayNoneNavSlide navSlide">
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
                    <div className="burgerIcon w-[10%] justify-end" onClick={handleClickNavSlide}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="responsiveMobileHeader">
                    <a
                        href={elements[0].href}
                        className="text-[var(--onMain-color)] hover:text-gray-300 hover:underline w-[50%] transition duration-300 font-bold text-2xl"
                    >
                        {elements[0].title}
                    </a>
                    <div className="burgerIcon w-[50%] justify-end" onClick={handleClickNavSlide}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

