"use client";
import React, { useState, useEffect } from "react";
import ServiceList from "./services_list";
import { database} from "../../firebase_connecter";
import { ref, get } from "firebase/database";

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
                    "hasImage": v[key]["image"] !== undefined && v[key]["image"] !== "" && v[key]["image"] != "Neues Bild" && v[key]["image"] != "Kein Bild",
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