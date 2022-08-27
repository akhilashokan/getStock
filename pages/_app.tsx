import Head from 'next/head'
import './styles.scss'
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>App</title>
                <link rel="icon" href="https://raw.githubusercontent.com/akhilashokan/akhilashokan.github.io/react/public/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )

}