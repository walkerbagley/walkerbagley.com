import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CustomApp({ Component, pageProps }) {
	// let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	// if (dark) {
	// 	console.log("Dark mode");
	// }
	
	return <>
		<Head>
			<title>Walker Bagley</title>
			<meta name="description" content="Walker Bagley's Photography Portfolio" />
			<link rel="icon" href="/favicon.jpg" />
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-2CVLGKESEW"></script>
			<script
				dangerouslySetInnerHTML={{
                    __html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-2CVLGKESEW');
					`,
				}}
			/>
		</Head>
		<Navbar />
		<Component {...pageProps} />
		<Footer />
	</>
}