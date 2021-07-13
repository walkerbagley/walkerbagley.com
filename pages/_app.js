import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function CustomApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>Walker Bagley</title>
        <meta name="description" content="Walker Bagley's Photography Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  <Navbar/>
      <Component {...pageProps}/>
    </>
}