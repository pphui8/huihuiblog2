"use client";

import React from "react";
import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "./ThemeContext";

type Props = {};

export default function Page() {
  return (
    <ThemeContextProvider>
      <Toaster />
      <Header />
      {/* <Component {...pageProps} /> */}
      <Footer />
    </ThemeContextProvider>
  );
}
