import Image from 'next/image';
import React from 'react';

const Footer = ({ links, companySpecs, logo }) => {
  const footerCompanySpecifics = () => {
    return (
      <div className="mb-4 md:mb-0 flex items-stretch"> 
        <div className="flex-grow border-r pr-4"> 
          {companySpecs.map((spec, index) => (
            <p key={index} className="text-gray-300">{spec}</p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 container mx-auto grid grid-cols-3 w-full justify-between items-stretch gap-4">
        <div className="mb-4 md:mb-0 mr-4 flex-shrink-0 border-r pr-4"> 
          <Image src={logo} alt="Logo" className="w-32 h-auto" />
        </div>
        {footerCompanySpecifics()}
        <ul className="flex-col md:flex-row flex-wrap items-center">
          {links.map((link, index) => (
            <li key={index} className="mb-2 md:mb-0 mr-4 flex items-center">
              <a href={link.address} className="text-gray-300 hover:text-white transition duration-300 block">
                {link.icon && (
                  <Image src={link.icon} alt={`${link.name}`} className="mr-2" width={20} height={20} />
                )}
              </a>
            </li>
          ))}
        </ul>
    </footer>
  );
};

export default Footer;
