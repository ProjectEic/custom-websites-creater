"use client";
import "./globals.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Inter } from "next/font/google";
import Datenschutzerklaerung from "./componetns/Datenschutzerklaerung"; 
import Impressum from "./componetns/Impressum"; 
import Admin from "./componetns/admin/admin";
import NotFound from "./404";

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
            <Route path="/admin" element={<Admin/>} />
            <Route path="*" element={<NotFound/>} /> { /* TODO: CREATE proper 404-Page*/}
          </Routes>
        </body>
      </html>
    </Router>
  );
}
