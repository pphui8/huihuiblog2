"use client";

import React from "react";
import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "./ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>huihuiblog</title>
        <meta
          name="keywords"
          content="huihuiblog,pphui8,pphui,Jinhui,湫月汐,个人网站,网站主页,博客主页"
        />
        <meta name="description" content="pphui8的blog" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeContextProvider>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
