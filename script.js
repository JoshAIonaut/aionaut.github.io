// Minimal, focused interactions for the garden furniture landing page
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }));
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Reveal on scroll (subtle)
  const revealEls = document.querySelectorAll('.product-card, .feature, .stat');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });

  // Contact form demo handling
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(this);
      const name = data.get('name'); const email = data.get('email'); const message = data.get('message');
      if (!name || !email || !message) { alert('Bitte füllen Sie alle Pflichtfelder aus.'); return; }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; if (!emailRegex.test(email)) { alert('Bitte eine gültige E-Mail-Adresse eingeben.'); return; }
      const btn = this.querySelector('.btn'); const original = btn.innerHTML; btn.innerHTML = 'Wird gesendet…'; btn.disabled = true;
      setTimeout(() => { alert('Vielen Dank! Wir melden uns zeitnah.'); this.reset(); btn.innerHTML = original; btn.disabled = false; }, 1200);
    });
  }
});
