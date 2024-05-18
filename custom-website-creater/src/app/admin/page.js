"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {database, is_logged_in} from "../firebase_connecter";
import {ref, get, set } from "firebase/database";
import AdminLogin from "./adminLogin";
import iconMapper from "../components/iconMapper";
import JsonDictOneSidedEdit from "./jsonEditor/jsonDictOneSidedEdit";
import JsonDictTwoSidedEdit from "./jsonEditor/jsonDictTwoSidedEdit";
import JsonDictTwoSidedEditChosen from "./jsonEditor/jsonDictTwoSidedEditChosen";
import ServicesEdit from "./jsonEditor/servicesEdit";
import DynamicGallery from "./jsonEditor/dynamic_gallery";


const getDB = () => {
    const dbRef = ref(database, "/");
    return get(dbRef)
}



const Admin = () => {
    const [currentJson, setCurrentJson] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState(is_logged_in);


    useEffect(() => {
        getDB().then((res) => {
            const v = res.val();
            setCurrentJson(v)
        });
    }, []);

    // update if user is logged in
    useEffect(() => {
        setIsLoggedIn(is_logged_in);
    }, [is_logged_in]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const dbRef = ref(database, "/");
        var js12 = deepCpy(currentJson);
        console.log(js12);
        set(dbRef, js12);
    };

    const deepCpy = (obj) => {
        var nowObj = {};
        for (var k of Array.from(Object.keys(obj))) {
            if (k=="") { continue; }
            if (typeof obj[k] == "object") {
                nowObj[k] = deepCpy(obj[k]);
            } else if (Array.isArray(obj[k])) {
                nowObj[k] = obj[k].slice();
            } else if (typeof obj[k] !== "undefined") {
                nowObj[k] = obj[k];
            }
        }
        return nowObj;
    }

    const setDictFunc = (dict, arg1) => {
        var newDict = currentJson;
        for (var k of arg1) {
            newDict = newDict[k];
        }
        newDict = dict;
        setCurrentJson(JSON.parse(JSON.stringify(currentJson)));
        // update the diplay
        
    }

    return (
        !isLoggedIn ? <AdminLogin /> :
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>
            <form onSubmit={handleSubmit} className="space-y-4">

                <JsonDictOneSidedEdit
                    jsonDict={currentJson["landing"] || {}}
                    title="Hauptseite"
                />


                <JsonDictOneSidedEdit 
                    jsonDict={currentJson["company_info"] || {}} 
                    title="Impressum und Datenschutz"
                />

                <JsonDictTwoSidedEdit
                    jsonDict={(currentJson["footer"]|| {})["companySpecs"] || {}}
                    title="Unternehmensdaten"
                    setDictFunc={setDictFunc}
                    arg1={["footer", "companySpecs"]}
                />

                <JsonDictTwoSidedEditChosen
                    jsonDict={(currentJson["footer"]|| {})["links"] || {}}
                    title="Links"
                    setDictFunc={setDictFunc}
                    Options={Object.keys(iconMapper)}
                    arg1={["footer", "links"]}
                />

                <JsonDictTwoSidedEdit
                    jsonDict={currentJson["reviews"] || {}}
                    title="Bewertungen"
                    setDictFunc={setDictFunc}
                    arg1={["reviews"]}
                />

                <ServicesEdit 
                    jsonDict={currentJson["services"] || {}}
                    title="Dienstleistungen"
                    setDictFunc={setDictFunc}
                    arg1={["services"]}
                />

                <DynamicGallery 
                    title="Galerie"
                />


                <div className="h-5">

                </div>


                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-10"
                    onClick={() => {
                            window.alert("Gespeichert");
                        }}
                >Speichern</button>

                <button type="button" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" 
                    onClick={() => {
                        window.alert("Gespeichert");
                        window.location.href = "/";
                    }}
                >
                    Speichern und Zurück
                </button>
                    
            </form>
        </div>
    );
};

export default Admin;
