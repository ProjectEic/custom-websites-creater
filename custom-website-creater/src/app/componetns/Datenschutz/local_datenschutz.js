'use client';
import React, { useState, useEffect } from 'react';
import Datenschutzerklaerung from './Datenschutzerklaerung';
import {ref, get} from '../../firebase_emulator';
var database = ""

function getFooterDB() {
    const dbRef = ref(database, "/company_info");
    return get(dbRef)
}




const LocalDatenschutz = () => {;
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

export default LocalDatenschutz;