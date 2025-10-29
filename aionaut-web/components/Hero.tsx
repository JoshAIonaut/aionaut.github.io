import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Decorative gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-radial from-accent-500/20 via-accent-500/5 to-transparent blur-2xl" />
      </div>

      <div className="container-max pt-24 pb-20 sm:pt-28 sm:pb-28">
        <motion.p
          className="text-sm uppercase tracking-widest text-accent-400/90 mb-4"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Aionaut • KI-Beratung für den Mittelstand
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Navigieren Sie Ihr Unternehmen sicher durch das Zeitalter der Künstlichen Intelligenz.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-[var(--muted)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Wir entwickeln Agentic-KI-Systeme, RAG-Lösungen auf Ihren Unternehmensdaten und maßgeschneiderte Copiloten – von der Strategie über die Architektur bis zur produktiven Umsetzung.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <a href="#kontakt" className="btn-primary">Kostenloses Beratungsgespräch buchen</a>
          <a href="#leistungen" className="btn-secondary">Unsere Leistungen</a>
        </motion.div>
      </div>
    </header>
  );
}

