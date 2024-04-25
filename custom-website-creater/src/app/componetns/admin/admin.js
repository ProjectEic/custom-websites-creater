import React, { useState } from 'react';
import Image from 'next/image';

const Admin = () => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleImageDelete = () => {
        setImage(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Text:', text);
        console.log('Image:', image);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="text" className="block font-semibold mb-1">Text:</label>
                    <input type="text" id="text" value={text} onChange={handleTextChange} className="w-full border border-gray-300 rounded px-4 py-2 text-gray-950" />
                </div>
                <div>
                    <label htmlFor="image" className="block font-semibold mb-1">Image:</label>
                    <input type="file" id="image" onChange={handleImageChange} className="w-full border border-gray-300 rounded px-4 py-2" />
                    {image && (
                        <div className="mt-2">t
                            <Image src={URL.createObjectURL(image)} alt="Uploaded" width={200} height={200} />
                            <button type="button" onClick={handleImageDelete} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                        </div>
                    )}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
            </form>
        </div>
    );
};

export default Admin;
