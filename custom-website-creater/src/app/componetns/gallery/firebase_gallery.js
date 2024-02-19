'use client';
import React, { useState, useEffect } from 'react';
import Gallery from './gallery';
import { getFileListLinks}  from "../../firebase_connecter";

const FirebaseGallery = () => {
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        getFileListLinks().then((res) => {
            setLoadedImages(res.map((url) => ({ default: url })));
        });
    }, []);

    return (
        <Gallery 
        images={loadedImages}
        />
    );
};

export default FirebaseGallery;
  