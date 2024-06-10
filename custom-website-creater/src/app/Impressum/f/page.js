"use client";
import React, { useState, useEffect } from "react";
import Impressum from "../Impressum";
import { database} from "../../firebase_connecter";
import { ref, get } from "firebase/database";
import { remove_dict_starting_order } from "@/app/dict_transformer";

const getFooterDB = () => {
    const dbRef = ref(database, "/company_info");
    return get(dbRef)
}

const FirebaseImpressum = () => {;
    const [impressum, setFooter] = useState({});

    useEffect(() => { 

        getFooterDB().then((res) => {
          var v = res.val();
          v = remove_dict_starting_order(v);
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