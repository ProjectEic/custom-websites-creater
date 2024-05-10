"use client";
import React, { useEffect, useState } from "react";
import { getFileListLinks, uploadFile, deleteFile}  from "../../firebase_connecter";
import Image from "next/image";

const DynamicGallery = ({title}) => {

    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        getFileListLinks().then((res) => {
            setLoadedImages(res)
            
        });
    }, []);

    return (
        <div className="mb-10">
            <h1 className="text-2xl font-bold mb-4 mt-5">
                {title}
            </h1>
            <div className="flex flex-wrap">
                {loadedImages.map((image) => (
                    <div key={image} className="flex items-center space-x-2 m-5 relative">
                        <button 
                            onClick={() => { 
                                deleteFile("/" + image.split("/").pop().split("?")[0]);
                                setLoadedImages(loadedImages.filter((img) => img !== image));
                            }}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 absolute top-[0px] right-[0px]">
                                -
                        </button>
                        <Image
                            src={image}
                            alt={image.split("/").pop().split(".")[0]}
                            className="h-30 object-cover"
                            width={200}
                            height={200}
                        />

                    </div>
                ))}
            </div>

            {/* Img Upload Zone */}
            <div className="mt-4">
                <input type="file" id="file" className="hidden" accept="image/*" onChange={(e) => {
                    uploadFile(e.target.files[0]);
                    setLoadedImages([...loadedImages, URL.createObjectURL(e.target.files[0])]);
                }}/>
                <label htmlFor="file" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
                    Bild Hochladen
                </label>
            </div>
        </div>
    )

}


export default DynamicGallery;