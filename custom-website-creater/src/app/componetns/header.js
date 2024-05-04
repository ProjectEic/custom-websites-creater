"use client";
import React, { useState, useEffect } from "react";

const Header = ({ elements }) => {
    const positionLastElement = elements.length - 1;
    const [lastElementToCutIndex, setlastElementToCutIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setlastElementToCutIndex(window.innerWidth > 600 ? 0 : 1);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize);
            }
        };
    }, []);

    const handleClickNavSlide = () => {
        if (typeof document === "undefined") return;
        const listItems = document.querySelectorAll(".navSlide li");
        const navSlide = document.querySelector(".navSlide");
        navSlide?.classList.toggle("navSlideTranslate");
        
        let navSlideList = Array.prototype.filter.call(listItems, f => !f.classList.contains("toggleDisplay"));  

        navSlideList.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            }else{
                link.style.animation = `navLinksFade 500ms ease-out forwards ${index / 8 + 0.3}s`;
            }
        });
    }

    return (
        <header className="text-[var(--onMain-color)] h-[8vh]">
            <nav className="container fixed z-10 max-w-none">
                <ul className="items-center flex justify-evenly h-[8vh] responsiveDesktopHeader">
                    {elements.map((element, index) => (
                    <li className="text-center" key={index}>
                        <a  href={element.href}
                            className="text-[var(--onMain-color)]transition duration-300 font-bold text-2xl"
                        >
                            {element.title}
                        </a>
                    </li>
                    ))}
                </ul>
                <ul className="flex-col items-center justify-evenly absolute right-0 top-[8vh] h-[92vh] w-[60%] bg-[var(--main-color)] navSlide">
                    {elements.slice(1, positionLastElement + lastElementToCutIndex).map((element, index) => (
                    <li className="text-center" key={index}>
                        <a  href={element.href}
                            className="text-[var(--onMain-color)] hover:text-gray-300 transition duration-300 font-bold text-2xl"
                        >
                        {element.title}
                        </a>
                    </li>
                    ))}
                </ul>
                {/* Header For Tablet */}
                <div className="responsiveTabletHeader items-center h-[8vh] w-[95vw] pr-[5vw]">
                    <ul className="items-center flex justify-evenly w-[90%]"> 
                        <li>
                            <a  href={elements[0].href}
                                className="text-[var(--onMain-color)] transition duration-300 font-bold text-2xl"
                            >
                                {elements[0].title}
                            </a>
                        </li>
                        <li>
                            <a  href={elements[positionLastElement].href}
                                className="text-[var(--onMain-color)] transition duration-300 font-bold text-2xl"
                            >
                                {elements[positionLastElement].title}
                            </a>
                        </li>
                    </ul>
                    <div className="burgerIcon w-[10%] justify-end" onClick={handleClickNavSlide}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                 {/* Header For Mobile */}
                <div className="responsiveMobileHeader justify-around items-center h-[8vh]">
                    <ul>
                        <li>
                            <a  href={elements[0].href}
                                className="text-[var(--onMain-color)] transition duration-300 font-bold text-2xl"
                            >
                                {elements[0].title}
                            </a>
                        </li>
                    </ul>
                    <div className="burgerIcon" onClick={handleClickNavSlide}>
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
