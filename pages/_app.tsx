import '../styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';
import '../styles/markdown.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
