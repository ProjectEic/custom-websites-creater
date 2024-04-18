import Image from 'next/image';
import React from 'react';
import Link from "next/link";

/**
 * 
 * @param {Array} links
 * @param {Map<String, String>} companySpecs
 * @param {String} logo
 * @returns 
 */
const Footer = ({ links, companySpecs, logo }) => {
  const footerCompanySpecifics = () => {
    return (
      <div className="mb-4 md:mb-0 flex items-stretch"> 
        <div className="flex-grow border-r pr-4"> 
          <h3 className="font-semibold text-3xl pr-4 text-white">
            Infos:
          </h3>
          {Array.from(companySpecs.keys()).map((key, index) => (
            <p key={index} className="text-gray-300 py-2 text-lg font-normal">
              {key === "Email" ? (
                  <a href={`mailto:${companySpecs.get(key)}`} className="">
                    {key}:&nbsp;<span className="font-semibold underline hover:text-white">{companySpecs.get(key)}</span>
                  </a>
              ) : key === "Phone" ? (
                  <a href={`tel:${companySpecs.get(key)}`} className="">
                      {key}:&nbsp;<span className="font-semibold underline hover:text-white">{companySpecs.get(key)}</span>
                  </a>
              ) : (
                  <>
                      {key}:&nbsp;
                      <span className="font-semibold">{companySpecs.get(key)}</span>
                  </>
              )}
            </p>
          ))}

        </div>
      </div>
    );
  };

  return (
    <footer id="contactFooter" className="bg-gray-800 text-white py-8 px-4 md:px-8 grid grid-cols-3 w-full justify-between items-stretch gap-4 mx-0">
        {footerCompanySpecifics()}
        <ul className="flex-col md:flex-row flex-wrap items-center border-r pr-4">
          <h3 className="font-semibold text-3xl">
            Links:
          </h3>
          {links.map((link, index) => (
            <li key={index} className="mb-2 md:mb-0 mr-4 flex items-center pt-4">
              <a className="text-gray-300 hover:text-white hover:underline transition duration-300 flex gap-5 text-lg font-normal">
                {link.icon && (
                  <Image src={link.icon} alt={`${link.name}-icon`} className="mr-2 mt-1 h-fit" width={20} height={20} />
                )}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mb-4 md:mb-0 mr-4 flex flex-col"> 
          <Image src={logo} alt="Logo" className="w-32 h-auto" />
          <Link className="text-gray-300 py-2 text-lg font-normal hover:text-white hover:underline" href="/Impressum">
            Impressum
          </Link>
          <Link className="text-gray-300 py-2 text-lg font-normal hover:text-white hover:underline" href="/Datenschutz">
            Datenschutzerklärung
          </Link>
        </div>
    </footer>
  );
};

export default Footer;
