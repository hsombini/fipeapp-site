window.FipeApp = {
  name: 'FipeApp',
  company: 'IndieCompany',
  contact: 'contato@indiecompany.com.br',
  url: 'https://fipeapp.varella.ovh',
  updated: '2025-05-22'
};

(function () {
  var year = new Date().getFullYear();
  var yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = year;
  document.querySelectorAll('.copyright-year').forEach(function (el) {
    el.textContent = year;
  });

  document.querySelectorAll('.app-name').forEach(function (el) {
    el.textContent = window.FipeApp.name;
  });
  document.title = window.FipeApp.name + ' — Precos de Veiculos na Palma da Mao';

  var burger = document.querySelector('.navbar-burger');
  var menu = document.getElementById('mainNavbar');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }

  document.querySelectorAll('#mainNavbar .navbar-item').forEach(function (item) {
    item.addEventListener('click', function () {
      if (burger && burger.classList.contains('is-active')) {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
      }
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .phone-mockup-static').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  var style = document.createElement('style');
  style.textContent = '.feature-card.is-visible, .phone-mockup-static.is-visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
})();