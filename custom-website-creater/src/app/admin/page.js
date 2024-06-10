"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, use } from "react";
import { database, is_logged_in } from "../firebase_connecter";
import { ref, get, set } from "firebase/database";
import AdminLogin from "./adminLogin";
import iconMapper from "../components/iconMapper";
import JsonDictOneSidedEdit from "./jsonEditor/jsonDictOneSidedEdit";
import JsonDictTwoSidedEdit from "./jsonEditor/jsonDictTwoSidedEdit";
import JsonDictTwoSidedEditChosen from "./jsonEditor/jsonDictTwoSidedEditChosen";
import ServicesEdit from "./jsonEditor/servicesEdit";
import DynamicGallery from "./jsonEditor/dynamic_gallery";
import RotatingLoader from "../components/RotatingLoader";
import { add_dict_starting_order, remove_dict_starting_order } from "../dict_transformer";


const getDB = () => {
    const dbRef = ref(database, "/");
    return get(dbRef)
}



const Admin = () => {
    const [currentJson, setCurrentJson] = useState({});
    const [isLoading, setIsLoading] = useState(true);
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
        setTimeout(() => {
            if(is_logged_in) setIsLoading(false);
        }, 1000);
    }, [is_logged_in]);

    useEffect(() => {
        setTimeout(() => {
            if (!isLoggedIn) {
                setIsLoading(false);
            }
            console.log("logged in")
        }, 1000);
    }, [isLoggedIn]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // save all paths
        for (var i = 0; i < paths_to_save.length; i++) {
            setDictFunc(add_dict_starting_order(parallel_dicts[i]), paths_to_save[i]);
        }

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
        
        for (var k of Object.keys(dict)) {
            newDict[k] = dict[k];
        }
        // remove all undefined keys
        for (var k of Object.keys(newDict)) {
            if (typeof dict[k] == "undefined") {
                delete newDict[k];
            }
        }

        setCurrentJson(JSON.parse(JSON.stringify(currentJson)));
        // update the diplay
        
    }

    const paths_to_save = [
        ["landing"],
        ["company_info"],
        ["footer", "companySpecs"],
        ["footer", "links"],
        ["reviews"],
        ["services"]
    ]

    const parallel_dicts = [
        remove_dict_starting_order(currentJson["landing"]) || {},
        remove_dict_starting_order(currentJson["company_info"]) || {},
        remove_dict_starting_order((currentJson["footer"]|| {})["companySpecs"]) || {},
        remove_dict_starting_order((currentJson["footer"]|| {})["links"]) || {},
        remove_dict_starting_order(currentJson["reviews"]) || {},
        remove_dict_starting_order(currentJson["services"]) || {}
    ]

    // 1000ms delay to show loading screen
    // if not logged in, show login screen
    // if logged in, show admin panel
    return (
        isLoading ? 
    <div className="flex justify-center items-center h-screen">
        <RotatingLoader/>
    </div>
        : 
        <div>
            {!isLoggedIn ? <AdminLogin /> :
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <JsonDictOneSidedEdit
                        jsonDict={parallel_dicts[0]}
                        title="Hauptseite"
                    />


                    <JsonDictOneSidedEdit 
                        jsonDict={parallel_dicts[1]} 
                        title="Impressum und Datenschutz"
                    />

                    <JsonDictTwoSidedEdit
                        jsonDict={parallel_dicts[2]}
                        title="Unternehmensdaten"
                        setDictFunc={setDictFunc}
                        arg1={["footer", "companySpecs"]}
                    />

                    <JsonDictTwoSidedEditChosen
                        jsonDict={parallel_dicts[3]}
                        title="Links"
                        setDictFunc={setDictFunc}
                        Options={Object.keys(iconMapper)}
                        arg1={["footer", "links"]}
                    />

                    <JsonDictTwoSidedEdit
                        jsonDict={parallel_dicts[4]}
                        title="Bewertungen"
                        setDictFunc={setDictFunc}
                        arg1={["reviews"]}
                    />

                    <ServicesEdit 
                        jsonDict={parallel_dicts[5]}
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
                                const e = {preventDefault: () => {}};
                                handleSubmit(e);
                                window.alert("Gespeichert");
                            }}
                    >Speichern</button>

                    <button type="button" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" 
                        onClick={() => {
                            const e = {preventDefault: () => {}};
                            handleSubmit(e);
                            window.alert("Gespeichert");
                            window.location.href = "/";
                        }}
                    >
                        Speichern und Zurück
                    </button>
                        
                </form>
            </div>}
        </div>
    );
};

export default Admin;
