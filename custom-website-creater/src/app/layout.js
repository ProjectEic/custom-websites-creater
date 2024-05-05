"use client";
import "./globals.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Inter } from "next/font/google";
import Settings from "./website_settings.json";
import Mapper from "./content_mapper"; 
import Admin from "./componetns/admin/admin";
import NotFound from "./404";
import WebsiteData from "./website_data.json";
const inter = Inter({ subsets: ["latin"] });



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
          <title>{WebsiteData["landing"]["headline"]}</title>
          <meta name="description" content={WebsiteData["landing"]["aboutText"]} />
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
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </body>
      </html>
    </Router>
  );
}
