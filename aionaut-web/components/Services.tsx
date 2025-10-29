import { motion } from 'framer-motion';

const services = [
  {
    title: 'Agentic-KI-Entwicklung',
    desc: 'Entwurf und Implementierung agentischer KI-Systeme, die eigenständig Aufgaben orchestrieren und Prozesse automatisieren.'
  },
  {
    title: 'RAG-Integrationen mit Unternehmensdaten',
    desc: 'Retrieval-Augmented-Generation auf Ihren Datenquellen: Suche, Kontextualisierung und Antworten mit Governance & Sicherheit.'
  },
  {
    title: 'KI-Beratung & Enablement',
    desc: 'Von der Strategie über Architektur-Blueprints bis zu Pilotierung, Schulungen und Change Enablement.'
  }
];

export default function Services() {
  return (
    <section id="leistungen" className="container-max py-16 sm:py-24">
      <div className="mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Leistungen</h2>
        <p className="mt-2 text-[var(--muted)]">Klar fokussiert auf Wirkung und Sicherheit.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="rounded-xl border border-slate-800/60 bg-[var(--card)]/70 p-6 backdrop-blur-sm hover:border-slate-700 transition-colors"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.04 }}
          >
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">{s.desc}</p>
            {/* Optional: Icon oder Bild hier einfügen */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

