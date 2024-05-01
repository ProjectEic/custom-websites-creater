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
const title = "My Website"; // TODO: make it DYNAMIC
const metaData = ""; // TODO: make it DYNAMIC

export default function RootLayout({ children }) {
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
            <Route path="/Datenschutz" element={<Datenschutzerklaerung 
              datenschutz={{
                name: "Franz Ferdinand",
                street: "Stephanstraße 5",
                postCodeWithCity: "76133 Karlsruhe",
                country: "Germany",
                telephone: "+49 721 123456",
                email: "lucaschi@t-online.de",
              }}
            />} /> 
            <Route path="/Impressum" element={<Impressum 
              impressum={
                {
                  name: "Franz Ferdinand",
                  street: "Stephanstraße 5",
                  postCodeWithCity: "76133 Karlsruhe",
                  country: "Germany",
                  telephone: "+49 721 123456",
                  email: "lucaschi@t-online.de",
                }
              }
            />} /> 
            <Route path="/admin" element={<Admin/>} />
            <Route path="*" element={<NotFound/>} /> { /* TODO: CREATE proper 404-Page*/}
          </Routes>
        </body>
      </html>
    </Router>
  );
}
