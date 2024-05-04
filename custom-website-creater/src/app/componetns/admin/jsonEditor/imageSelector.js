"use client";
import React, { useState, useEffect } from "react";
import { getFileListLinks}  from "../../../firebase_connecter";
import Select from "react-select"

const ImageSelector = ({defaultVal, onChange}) => {
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        getFileListLinks().then((res) => {
            setLoadedImages(res.map((url) => ({ value: url, label: url }))
            );
        });
    }, []);

    return (
        <div>
            
            <label className="block font-semibold mb-1">image:</label>
            <Select
                value={{value: defaultVal, label: defaultVal.split("/").at(-1).split(".")[0]}}
                options={loadedImages}
                formatOptionLabel={img => (
                    <div className="img-option flex">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.value} alt="img-image" className="h-[100px]"/>
                        <span className="text-black">{img.value.split("/").at(-1).split(".")[0] }</span>
                    </div>
                )}
                className="w-80 border border-gray-300 rounded px-4 py-2 text-gray-950"
                onChange={(e) => { onChange(e.value) }}
                
            />  

            {/* <select
                defaultValue={defaultVal}
                onChange={(e) => { onChange(e.target.value) }}
                className="w-80 border border-gray-300 rounded px-4 py-2 text-gray-950"
            >
                {loadedImages.map((image) => (
                    <option key={image.default} value={image.default}
                        style={{backgroundImage: `url(${image.default})`, backgroundSize: "cover", backgroundPosition: "left center", paddingLeft: "40px"}}
                    >
                        <img
                            src={image.default}
                            alt={image.default.split("/").pop().split(".")[0]}
                            className="h-10 w-10 object-cover rounded-full"
                        />
                        
                      

                    </option>
                ))}

            </select> */}


        </div>
    )

}


export default ImageSelector;