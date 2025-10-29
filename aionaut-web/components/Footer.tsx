export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-slate-800/60">
      <div className="container-max py-8 text-sm text-[var(--muted)] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {year} Aionaut. Alle Rechte vorbehalten.</p>
        <nav className="flex items-center gap-5">
          {/* Impressum/Datenschutz Links als Platzhalter */}
          <a href="#" className="hover:text-slate-200">Impressum</a>
          <a href="#" className="hover:text-slate-200">Datenschutz</a>
        </nav>
      </div>
    </footer>
  );
}

