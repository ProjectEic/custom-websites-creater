"use client";
import React, { useState, useEffect } from "react";
import Impressum from "../Impressum";
import { database} from "../../firebase_connecter";
import { ref, get } from "firebase/database";

const getFooterDB = () => {
    const dbRef = ref(database, "/company_info");
    return get(dbRef)
}

const FirebaseImpressum = () => {;
    const [impressum, setFooter] = useState({});

    useEffect(() => { 

        getFooterDB().then((res) => {
            const v = res.val();
            setFooter(v)
        });
    }, []);
  
  return (
    <Impressum 
      impressum={impressum}
    />
  );
    
};

export default FirebaseImpressum;