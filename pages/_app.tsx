import '../styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';
import React from 'react';
import ThemeContextProvider from './ThemeContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Toaster />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeContextProvider>
  );
}

export default MyApp
