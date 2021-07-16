import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CustomApp({ Component, pageProps }) {
	return <>
		<Head>
			<title>Walker Bagley</title>
			<meta name="description" content="Walker Bagley's Photography Portfolio" />
			<link rel="icon" href="/favicon.ico" />
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-0QDS47PL1L"></script>
			<script>
				dangerouslySetInnerHTML={{
					__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-0QDS47PL1L');
				`,
				}}
			</script>
		</Head>
		<Navbar />
		<Component {...pageProps} />
		<Footer />
	</>
}