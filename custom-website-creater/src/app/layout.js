"use client";
import "./globals.css";
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import Head from "next/head"; 
import Settings from "./website_settings.json";
import WebsiteData from "./website_data.json";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  const filetypes = ["jpg", "png", "jpeg", "gif", "heic", "heif", "webp"];
  let aboutImage = "";
  filetypes.forEach((filetype) => {
    // check if file exists in folder
    try {
      require(`./icons/about.${filetype}`);

    } catch (error) {
      return;
    }
    aboutImage = `./icons/about.${filetype}`;    
  });

  useEffect(() => {
    for (let key in Settings["colors"]) {
      document.documentElement.style.setProperty(`${key}`, Settings["colors"][key]);
    }
    // find which about.{jpg, png, jpeg, gif, heic, heif, webp} is in icons folder
    if (aboutImage) {
      document.documentElement.style.setProperty("background-landing", `url(/icons/${aboutImage})`);
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
