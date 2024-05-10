"use client";
import React, { useState, useEffect } from "react";
import Landing from "./landing_section";
import {ref, get} from "../../firebase_emulator";

var database = "";

const getLandingDB = () => {
    const dbRef = ref(database, "/landing");
    return get(dbRef);
}

const LocalLanding = () => {;
    const [props, setLanding] = useState({});

    useEffect(() => { 

        getLandingDB().then((res) => {
            const v = res.val();;
            setLanding(v)
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

export default LocalLanding;