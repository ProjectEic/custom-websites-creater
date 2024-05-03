'use client';
import React, { useState, useEffect } from 'react';
import Impressum from './Impressum';
import {auth, database} from '../../firebase_connecter';
import {getDatabase, ref, get, child } from "firebase/database";

function getFooterDB() {
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