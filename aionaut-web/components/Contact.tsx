import { useState } from 'react';
import { motion } from 'framer-motion';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="container-max py-16 sm:py-24">
      <div className="mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Kontakt</h2>
        <p className="mt-2 text-[var(--muted)]">Schreiben Sie uns – wir melden uns zeitnah.</p>
      </div>

      <motion.form
        onSubmit={submit}
        className="grid gap-4 sm:max-w-xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <div>
          <label className="block text-sm mb-1 text-slate-200">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
            placeholder="Ihr Name"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-slate-200">E-Mail</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
            placeholder="ihre.adresse@unternehmen.de"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 text-slate-200">Nachricht</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-500"
            placeholder="Worum geht es?"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="btn-primary"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Senden …' : 'Absenden'}
          </button>
          {status === 'success' && (
            <span className="text-sm text-emerald-400">Danke! Wir haben Ihre Nachricht erhalten.</span>
          )}
          {status === 'error' && (
            <span className="text-sm text-rose-400">Fehler beim Senden. Bitte später erneut versuchen.</span>
          )}
        </div>
      </motion.form>
    </section>
  );
}

