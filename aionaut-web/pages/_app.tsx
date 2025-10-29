import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Aionaut – KI-Beratung für den Mittelstand</title>
        <meta name="description" content="Aionaut berät mittelständische Unternehmen beim Einsatz von KI: Agentic-KI-Systeme, RAG-Lösungen, maßgeschneiderte Copiloten. Von Strategie bis Umsetzung." />
        <meta name="theme-color" content="#0B1220" />
      </Head>
      <div className={inter.className + ' bg-noise min-h-screen'}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

