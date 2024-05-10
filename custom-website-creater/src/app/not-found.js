"use client";
import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 text-center mb-8">The page you are looking for does not exist.</p>
            <p className="text-lg text-gray-700 hover:text-white cursor-pointer">
                Click <Link href="/" className="underline">here</Link> to go back to the homepage.
            </p>
        </div>
    );
};

export default NotFound;