"use client";
import React, { useState, useEffect } from "react";
import Datenschutzerklaerung from "../Datenschutzerklaerung";
import { database} from "../../firebase_connecter";
import { ref, get } from "firebase/database";

const getFooterDB = () =>{
    const dbRef = ref(database, "/company_info");
    return get(dbRef)
}




const FirebaseDatenschutz = () => {;
    const [datenschutz, setFooter] = useState({});

    useEffect(() => { 

        getFooterDB().then((res) => {
            const v = res.val();
            setFooter(v)
        });
    }, []);

  
  return (
    <Datenschutzerklaerung 
      datenschutz={datenschutz}
    />
  );
    
};

export default FirebaseDatenschutz;