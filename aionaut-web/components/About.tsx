import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="container-max py-16 sm:py-24">
      <div className="mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Über Aionaut</h2>
      </div>
      <motion.div
        className="grid gap-8 sm:grid-cols-2"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-[var(--muted)]">
          Aionaut unterstützt mittelständische Unternehmen dabei, die Potenziale von Künstlicher Intelligenz sicher und wirksam zu nutzen. Unser Team vereint Erfahrung aus Beratung, Data/AI-Engineering und Produktentwicklung.
        </p>
        <p className="text-[var(--muted)]">
          Wir begleiten Sie von der Strategie über Architektur & Governance bis zur produktiven Umsetzung. Unser Anspruch: belastbare Ergebnisse, nachvollziehbare Entscheidungen, zuverlässige Integration in Ihre Prozesse.
        </p>
        {/* Hinweis: Team-Fotos, Logos oder Referenzen können hier ergänzt werden. */}
      </motion.div>
    </section>
  );
}

