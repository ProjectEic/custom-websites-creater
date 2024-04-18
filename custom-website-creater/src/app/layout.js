"use client";
import "./globals.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Inter } from "next/font/google";
import Datenschutzerklaerung from "./componetns/Datenschutzerklaerung"; 
import Impressum from "./componetns/Impressum"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Router>
      <html>
        <body className={inter.className}>
          <Routes> 
            <Route path="/" element={children} /> 
            <Route path="/Datenschutz" element={<Datenschutzerklaerung />} /> 
            <Route path="/Impressum" element={<Impressum />} /> 
          </Routes>
        </body>
      </html>
    </Router>
  );
}
