import Head from 'next/head';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aionaut – Navigieren Sie sicher durch das KI-Zeitalter</title>
      </Head>
      <Hero />
      <Services />
      <Approach />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

