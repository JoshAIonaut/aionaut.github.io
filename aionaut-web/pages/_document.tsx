import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de" className="dark">
        <Head>
          {/* Fonts preconnect; Inter loaded via next/font in _app */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Aionaut – KI-Beratung" />
          <meta property="og:description" content="Agentic-KI, RAG, Copiloten für den Mittelstand." />
        </Head>
        <body className="bg-[var(--bg)] text-[var(--fg)]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

