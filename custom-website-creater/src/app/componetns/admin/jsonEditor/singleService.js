"use client";
import React from "react";
import ImageSelector from "./imageSelector";


const addImgPropIfNecessary = (jsonDict) => {
    if (!jsonDict.hasOwnProperty("image")) {
        jsonDict["image"] = "default";
    }
    return jsonDict;

}

const SingleService = ({jsonDict, onChange}) => {
    addImgPropIfNecessary(jsonDict)
    return (
        <div className="singleServiceWrapper flex px-10 justify-center align-center items-start">
            
            {Array.from(Object.keys(jsonDict)).map((key, index) => {
                if (key == "image") { 
                    return <ImageSelector 
                        className="block pl-5"
                        key={`ImageSelector${index}`}	
                        onChange= { (newVal) => { jsonDict[key] = newVal; onChange(jsonDict); }}
                        defaultVal={jsonDict[key]}
                    />
                
                }
                return (
                    <div key={index} className="block pl-5">
                        <label className="block font-semibold mb-1">{key}:</label>
                        <input 
                            type="text" 
                            id={key} 
                            defaultValue={jsonDict[key]} 
                            onChange={(e) => { jsonDict[key] = e.target.value; onChange(jsonDict);}} 
                            className="w-50 border border-gray-300 rounded px-4 py-2 text-gray-950 h-50"
                        />
                    </div>
                )
            })}

                <button 
                        onClick={() => { onChange(undefined)}} 
                        className="mt-7 bg-red-500 text-white ml-5 px-4 py-2 rounded hover:bg-red-600 h-10 ml-2">
                            -
                </button>

        </div>
    )

}


export default SingleService;