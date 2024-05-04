"use client";
import React, { useState, useEffect } from "react";
import Impressum from "./Impressum";
import {ref, get} from "../../firebase_emulator";

var database = "";

const getFooterDB = () => {
    const dbRef = ref(database, "/company_info");
    return get(dbRef)
}

const LocalImpressum = () => {;
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

export default LocalImpressum;