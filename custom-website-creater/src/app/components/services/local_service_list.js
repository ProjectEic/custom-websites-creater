"use client";
import React, { useState, useEffect } from "react";
import ServiceList from "./services_list";
import {ref, get} from "../../firebase_emulator";

var database = "";

const getServicesDB = () => {
    const dbRef = ref(database, "/services");
    return get(dbRef)
}


const importAll = (r) => {
  return r.keys().map((key) => r(key).default.src);
}

function findImage(images, name) {
    const image = images.find((image) => image.includes(name.split(".")[0]) && image.includes(name.split(".")[1]));
    return image ? image : undefined;
}

const FirebaseServiceList = () => {;
    const [services, setServices] = useState([]);
    const images = importAll(require.context("../gallery/img/", false, /\.(png|jpe?g|svg)$/) );
    console.log(images);
    useEffect(() => { 

        getServicesDB().then((res) => {
            const v = res.val();
            setServices(Object.keys(v).map((key) => {
              
                return {
                    "name": key, 
                    "text": v[key]["text"],
                    "image": findImage(images, v[key]["image"]),
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