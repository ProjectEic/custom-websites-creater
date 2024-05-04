"use client";
import React from "react";



const JsonDictOneSidedEdit = ({jsonDict, title}) => {

    return (
        <div className="mb-10">
            <h1 className="text-2xl font-bold mb-4">
                {title}
            </h1>
            {Array.from(Object.keys(jsonDict)).map((key, index) => (
                <div key={index}>
                    <label key={index} className="block font-semibold mb-1">{key}:</label>

                    <input 
                        type="text" 
                        id={key} 
                        defaultValue={jsonDict[key]} 
                        onChange={(e) => { jsonDict[key] = e.target.value}} 
                        className="w-full border border-gray-300 rounded px-4 py-2 text-gray-950" />
                </div>
            ))}


        </div>
    )

}


export default JsonDictOneSidedEdit;