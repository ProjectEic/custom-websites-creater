"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import iconMapper from "./iconMapper";
import Settings from "../website_settings.json";

/**
 * 
 * @param {Array} links
 * @param {Map<String, String>} companySpecs
 * @param {String} logo
 * @returns 
 */
const Footer = ({ links, companySpecs }) => {
  const impressumLink = Settings["mode"] == "firebase" ? "/Impressum/f.html" : "/Impressum/l.html";
  const datenschutzLink =Settings["mode"] == "firebase" ? "/Datenschutz/f.html"  : "/Datenschutz/l.html";
  console.log(Settings["mode"])
  
  const footerInfosRef = useRef(null);
  const footerLinksRef = useRef(null);
  const footerSubpagesRef = useRef(null);
  const isInViewInfos = useInView(footerInfosRef, { once: true });
  const isInViewLinks = useInView(footerLinksRef, { once: true });
  const isInViewSubpages = useInView(footerSubpagesRef, { once: true });
  const initialAnimation = { opacity: 0, scale: .99};
  const animateAnimation = { opacity: 1, scale: 1 };
  const transitionAnimation = { delay: 0.2, duration: 0.6, ease: "easeInOut" };


  const footerCompanySpecifics = () => {
    return (
      <motion.div
        ref={footerInfosRef}
        initial={isInViewInfos ? animateAnimation : initialAnimation}
        animate={isInViewInfos ? animateAnimation : initialAnimation}
        transition={transitionAnimation}
        className="mb-4 md:mb-0 flex items-stretch"
      > 
        <div className="flex-grow border-r pr-4"> 
          <h3 className="font-semibold text-3xl pr-4 text-white">
            Infos:
          </h3>
          {Array.from(companySpecs.keys()).map((key, index) => (
            <p key={index} className="text-gray-300 py-2 text-lg font-normal">
              {key === "Email" ? (
                  <Link href={`mailto:${companySpecs.get(key)}`} className="">
                    {key}:&nbsp;<span className="font-semibold underline hover:text-white">{companySpecs.get(key)}</span>
                  </Link>
              ) : key === "Phone" ? (
                  <Link href={`tel:${companySpecs.get(key)}`} className="">
                      {key}:&nbsp;<span className="font-semibold underline hover:text-white">{companySpecs.get(key)}</span>
                  </Link>
              ) : (
                  <>
                      {key}:&nbsp;
                      <span className="font-semibold">{companySpecs.get(key)}</span>
                  </>
              )}
            </p>
          ))}

        </div>
      </motion.div>
    );
  };
  
  return (
    <footer id="Contact" className="bg-gray-800 text-white py-8 px-4 md:px-8 grid grid-cols-3 w-full justify-between items-stretch gap-4 mx-0">
        {footerCompanySpecifics()}
        <motion.ul 
          ref={footerLinksRef}
          initial={isInViewLinks ? animateAnimation : initialAnimation}
          animate={isInViewLinks ? animateAnimation : initialAnimation}
          transition={transitionAnimation}
          className="flex-col md:flex-row flex-wrap items-center border-r pr-4"
        >
          <h3 className="font-semibold text-3xl">
            Links:
          </h3>
          
          {(links?links:[]).map((link, index) => (
            <li key={index} className="mb-2 md:mb-0 mr-4 flex items-center pt-4">
              <Link className="text-gray-300 transition duration-300 flex gap-5 text-lg font-normal hover:text-white" href={link.link}>
               
                  <Image src={iconMapper[link.name.toLowerCase()]} alt={`${link.name}-icon`} className="mr-2 mt-1 h-fit" width={20} height={20} />
                
                <span className="hoverUnderlineEffect">{link.name}</span>
              </Link>
            </li>
          ))}
        </motion.ul>
        <motion.div 
          ref={footerSubpagesRef}
          initial={isInViewSubpages ? animateAnimation : initialAnimation}
          animate={isInViewSubpages ? animateAnimation : initialAnimation}
          transition={transitionAnimation}
          className="mb-4 md:mb-0 mr-4 flex flex-col"
        > 
          <Link className="hoverUnderlineEffect text-gray-300 py-2 font-normal hover:text-white w-fit text-[1.125rem]" href={impressumLink}>
            Impressum
          </Link>
          <Link className="hoverUnderlineEffect text-gray-300 py-2 font-normal hover:text-white w-fit text-[1.125rem]" href={datenschutzLink}>
            Datenschutzerklärung
          </Link> 
        </motion.div>
    </footer>
  );
};

export default Footer;
