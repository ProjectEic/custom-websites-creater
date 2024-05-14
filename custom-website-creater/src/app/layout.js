"use client";
import "./globals.css";
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import Head from "next/head"; 
import Settings from "./website_settings.json";
import WebsiteData from "./website_data.json";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  useEffect(() => {
    for (let key in Settings["colors"]) {
      document.documentElement.style.setProperty(`${key}`, Settings["colors"][key]);
    }
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>{WebsiteData["landing"]["headline"]}</title>
        <meta name="description" content={WebsiteData["landing"]["aboutText"]} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
