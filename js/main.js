(function () {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const sidebar = $('.sidebar');
  const navToggle = $('.sidebar__toggle');
  const navMenu = $('.sidebar__nav');

  const handleScroll = () => {
    if (!sidebar) return;
    const scrolled = window.scrollY > 12;
    sidebar.classList.toggle('sidebar--scrolled', scrolled);
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    $$('a[href^="#"]', navMenu).forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => io.observe(el));

  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const yearEl = $('#year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const applyTheme = (mode) => {
    document.documentElement.setAttribute('data-theme', mode);
    const toggle = $('#theme-toggle');
    if (toggle) toggle.textContent = mode === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('theme', mode);
  };
  const storedTheme = localStorage.getItem('theme');
  applyTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

  $('#theme-toggle')?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  const form = $('#contact-form');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = $('#name')?.value || '';
    const email = $('#email')?.value || '';
    const message = $('#message')?.value || '';
    const to = 'kontakt@example.com';
    const subject = encodeURIComponent('Kontaktanfrage AIonaut');
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
})();

