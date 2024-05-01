'use client';
import React, { useState, useEffect } from 'react';
import Footer from '../footer';
import {ref, get} from '../../firebase_emulator';
var database = ""

function getFooterDB() {
    const dbRef = ref(database, "/footer");
    return get(dbRef)
}




const LocalFooter = () => {;
    const [footerData, setFooter] = useState({});

    useEffect(() => { 

        getFooterDB().then((res) => {
            const v = res.val();
            setFooter(v)
        });
    }, []);

  
  return (
    <Footer
        links={Object.entries(footerData.links? footerData.links: {}).map((v, index) => {return {"name": v[0], "link": v[1]}})}
        companySpecs={new Map(footerData.companySpecs? Object.entries(footerData.companySpecs): []) }
        logo={footerData.logo}
       />
    );
};

export default LocalFooter;