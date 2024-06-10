"use client";
import { add_dict_starting_order } from "@/app/dict_transformer";
import React, { useEffect } from "react";


const JsonDictTwoSidedEdit = ({jsonDict, title, setDictFunc, arg1}) => {

    useEffect(() => {
        console.log(jsonDict)
    }
    , [jsonDict])


    return (
        <div className="mb-10">
            <h1 className="text-2xl font-bold mb-4">
                {title}
            </h1>
            <div className="block flex-wrap">
                {Array.from(Object.keys(jsonDict)).map((key, index) => (
                    <div key={key} className="flex items-center space-x-2 mt-1 mb-1">
                        <input 
                            type="text" 
                            id={key} 
                            defaultValue={key} 
                            onChange={(e) => { 
                                
                                var prevValue = jsonDict[key];
                                delete jsonDict[key];
                                jsonDict[e.target.value] = prevValue;
                                key = e.target.value;
                            }} 
                            className="border border-gray-300 rounded px-4 py-2 text-gray-950" />

                        <input 
                            type="text" 
                            id={key} 
                            defaultValue={jsonDict[key]} 
                            // OnChange={(e) => { jsonDict[key] = e.target.value;  }}
                            onInput={(e) => { jsonDict[key] = e.target.value;  }}
                            className="w-full border border-gray-300 rounded px-4 py-2 text-gray-950" />

                        <button 
                            onClick={() => { delete jsonDict[key];  setDictFunc(add_dict_starting_order(jsonDict), arg1)}} 
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                -
                        </button>
                        
                    </div>
                ))}
            </div>

            {/* Add Button */}
            <button 
                onClick={() => {  jsonDict["Neue Eigenschaft"] = "Neuer Wert"; setDictFunc(add_dict_starting_order(jsonDict), arg1)} } 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    +
            </button>
        </div>
    )

}


export default JsonDictTwoSidedEdit;