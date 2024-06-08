"use client";
import React, { useState, useEffect } from "react";
import Footer from "../footer";
import { database} from "../../firebase_connecter";
import { ref, get } from "firebase/database";
import { remove_dict_starting_order } from "@/app/dict_transformer";

const getFooterDB = () => {
    const dbRef = ref(database, "/footer");
    return get(dbRef)
}

const FirebaseFooter = () => {;
    const [footerData, setFooter] = useState({});

    useEffect(() => { 

        getFooterDB().then((res) => {
            const v = res.val();
            setFooter(v)
        });
    }, []);

  
  return (
    <Footer
        links={Object.entries(footerData.links? footerData.links: {}).map((v) => {return {"name": v[0], "link": v[1]}})}
        companySpecs={new Map(
            footerData.companySpecs ? Object.entries(remove_dict_starting_order(footerData.companySpecs)): []
        
        )}
        logo={footerData.logo}
       />
    );
};

export default FirebaseFooter;