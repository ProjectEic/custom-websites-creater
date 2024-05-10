"use client";
import React, { useState, useEffect } from "react";
import Landing from "./landing_section";
import { database} from "../../firebase_connecter";
import { ref, get } from "firebase/database";

const getLandingDB = () => {
    const dbRef = ref(database, "/landing");
    return get(dbRef);
}

const FirebaseLanding = () => {;
    const [props, setLanding] = useState({});

    useEffect(() => { 

        getLandingDB().then((res) => {
            const v = res.val();
            setLanding(v);
        });
    }, []);
  
  return (
    <Landing 
        headline={props.headline}
        aboutText={props.aboutText}
        backgroundImageUrl={props.backgroundImageUrl}
    />
  );
};

export default FirebaseLanding;