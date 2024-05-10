"use client";
import React, { useState, useEffect } from "react";
import ServiceList from "./services_list";
import {ref, get} from "../../firebase_emulator";

var database = "";

const getServicesDB = () => {
    const dbRef = ref(database, "/services");
    return get(dbRef)
}

const FirebaseServiceList = () => {;
    const [services, setServices] = useState([]);

    useEffect(() => { 

        getServicesDB().then((res) => {
            const v = res.val();
            setServices(Object.keys(v).map((key) => {
                return {
                    "name": key, 
                    "text": v[key]["text"],
                    "image": v[key]["image"],
                    "hasImage": v[key]["image"] !== undefined,
                    "link": v[key]["link"],
                    "linkText": v[key]["linkText"]
                }
            }))
        });
    }, []);

  
  return (
    <ServiceList 
      services={services}
    />
  );
};

export default FirebaseServiceList;