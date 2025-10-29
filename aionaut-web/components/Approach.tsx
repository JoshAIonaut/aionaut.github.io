import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Assess',
    text: 'Use-Cases priorisieren, Daten- & Prozessreife prüfen, Zielbild und KPIs definieren.'
  },
  {
    title: 'Build',
    text: 'Architektur entwerfen, Prototypen bauen, Sicherheit & Governance verankern.'
  },
  {
    title: 'Integrate',
    text: 'Integration in Prozesse, Systeme und Teams. Rollout, Monitoring und Iteration.'
  }
];

export default function Approach() {
  return (
    <section className="container-max py-16 sm:py-24">
      <div className="mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Vorgehensweise</h2>
        <p className="mt-2 text-[var(--muted)]">Strukturiert, sicher und an Ergebnissen orientiert.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            className="rounded-xl border border-slate-800/60 bg-[var(--card)]/70 p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <div className="flex items-baseline gap-3">
              <span className="text-accent-400/90 font-semibold">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

