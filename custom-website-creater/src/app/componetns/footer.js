import Image from 'next/image';
import React from 'react';

const Footer = ({ links, companySpecs, logo }) => {
const footerCompanySpecifics = () => {
  return (
    <div className="mb-4 md:mb-0 flex items-stretch"> 
      <div className="flex-grow border-r pr-4"> 
        <h3 className="font-semibold text-3xl pr-4 text-white">
          Infos:
        </h3>
        {companySpecs.map((spec, index) => (
          <p key={index} className="text-gray-300 py-2 text-lg font-normal">{spec}</p>
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
              <a href={link.address} className="text-gray-300 hover:text-white transition duration-300 flex gap-5 text-lg font-normal">
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
          <a className="text-gray-300 py-2 text-lg font-normal" href="">Impressum</a>
          <a className="text-gray-300 py-2 text-lg font-normal" href="">Datenschutzerklärung</a>
        </div>
    </footer>
  );
};

export default Footer;
