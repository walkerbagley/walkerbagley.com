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
		<style jsx global>{`
			*{
				--accent: #1e94e3;
				--primary: #ffffff;
				--secondary: #222222;
				--shadow: #f3f3f3;
			}
			body{
				background-color: var(--primary);
			}
			@media (prefers-color-scheme: dark) {
				*{
					--primary: #222222;
					--secondary: #ffffff;
					--shadow: #3f3f3f;
				}
			}
		`}</style>
	</>
}