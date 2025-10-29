(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  // Sticky header shadow
  const header = $('.site-header');
  const onScroll = () => {
    if (window.scrollY > 6) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  const navToggle = $('.nav-toggle');
  const nav = $('#hauptnav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Intersection reveal
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  // Smooth scroll for internal anchors
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (ev) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Year in footer
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme toggle: auto/light/dark with localStorage
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const applyTheme = (mode) => {
    document.documentElement.setAttribute('data-theme', mode);
    const t = $('#theme-toggle');
    if (t) t.textContent = mode === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', mode);
  };
  const saved = localStorage.getItem('theme');
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  $('#theme-toggle')?.addEventListener('click', () => {
    const curr = document.documentElement.getAttribute('data-theme');
    applyTheme(curr === 'dark' ? 'light' : 'dark');
  });

  // Kontaktformular: mailto mit Vorbelegung
  const form = $('#contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#name')?.value || '';
    const email = $('#email')?.value || '';
    const message = $('#message')?.value || '';
    const to = 'kontakt@example.com'; // TODO: echte Adresse einsetzen
    const subject = encodeURIComponent('Kontaktanfrage Aionaut');
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
})();

