"use client";
import "./globals.css";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Inter } from "next/font/google";
import Settings from "./website_settings.json";
import Mapper from "./content_mapper"; 
import Admin from "./componetns/admin/admin";
import NotFound from "./404";

const inter = Inter({ subsets: ["latin"] });
const title = "My Website"; // TODO: make it DYNAMIC
const metaData = ""; // TODO: make it DYNAMIC

export default function RootLayout({ children }) {
  
  useEffect(() => {
    for (let key in Settings["colors"]) {
      document.documentElement.style.setProperty(`${key}`, Settings["colors"][key]);
    }
  });

  return (
    <Router>
      <html>
        <head>
          <title>{title}</title>
          <meta name="description" content={metaData} />
        </head>
        <body className={inter.className}>
          <Routes> 
            <Route path="/" element={children} /> 
            <Route path="/Datenschutz" element={
              Mapper[Settings["mode"]]["datenschutz"]
            
            } /> 
            <Route path="/Impressum" element={
            
              Mapper[Settings["mode"]]["impressum"]

            } /> 
            <Route path="/admin" element={<Admin/>} />
            <Route path="*" element={<NotFound/>} /> { /* TODO: CREATE proper 404-Page*/}
          </Routes>
        </body>
      </html>
    </Router>
  );
}
