"use client";
import React from "react";



const JsonDictTwoSidedEditChosen = ({jsonDict, Options, title, setDictFunc, arg1}) => {

    return (
        <div className="mb-10">
            <h1 className="text-2xl font-bold mb-4">
                {title}
            </h1>
            <div className="block flex-wrap"> 

                {Array.from(Object.keys(jsonDict)).map((key, index) => (
                    <div key={key} className="mt-1 mb-1 flex items-center space-x-2">

                        <select
                            className="order border-gray-300 rounded px-4 py-2 text-gray-950" 
                            onChange={(e) => {
                                var prevValue = jsonDict[key];
                                delete jsonDict[key];
                                jsonDict[e.target.value] = prevValue;
                                key = e.target.value;
                            }}
                            defaultValue={key}   
                            >

                            {Options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}

                           

                        </select>

                        <input 
                                type="text" 
                                id={key} 
                                defaultValue={jsonDict[key]} 
                                // OnChange={(e) => { jsonDict[key] = e.target.value;  }}
                                onInput={(e) => { jsonDict[key] = e.target.value;  }}
                                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-950" />

                        <button 
                            onClick={() => { delete jsonDict[key];  setDictFunc(jsonDict, arg1)}} 
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                -
                        </button>

                    </div>
                ))}

            </div>
 


            {/* Add Button */}
            <button 
                onClick={() => {  
                    // find unused key in Options
                    var key =  undefined;
                    for (var k of Options) {
                        if (jsonDict[k] === undefined) {
                            key = k;
                            break;
                        }
                    }
                    if (key === undefined) {
                        key = "Neue Eigenschaft";
                    }
                    jsonDict[key] = "Neuer Wert";
                    setDictFunc(jsonDict, arg1)
                } } 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    +
            </button>


        </div>
    )

}


export default JsonDictTwoSidedEditChosen;