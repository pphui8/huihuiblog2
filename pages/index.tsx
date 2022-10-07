import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from './components/Header'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>huihuiblog</title>
        <meta name="description" content="huihuiblog, pphui8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      

     <Footer />
    </div>
  )
}

export default Home
