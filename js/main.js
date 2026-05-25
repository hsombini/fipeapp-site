window.FipeApp = {
  name: 'FipeApp',
  company: 'IndieCompany',
  contact: 'contato@indiecompany.com.br',
  url: 'https://fipeapp.varella.ovh',
  updated: '2025-05-22'
};

(function () {
  // ---- Set current year ----
  var currentYear = new Date().getFullYear();
  var yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = currentYear;
  document.querySelectorAll('.copyright-year').forEach(function (el) {
    el.textContent = currentYear;
  });

  // ---- Replace app name placeholders ----
  document.querySelectorAll('.app-name').forEach(function (el) {
    el.textContent = window.FipeApp.name;
  });
  document.title = window.FipeApp.name + ' — Preços de Veículos na Palma da Mão';

  // ---- Navbar burger ----
  var burger = document.querySelector('.navbar-burger');
  var menu = document.getElementById('mainNavbar');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }

  // ---- Close mobile menu on link click ----
  document.querySelectorAll('#mainNavbar .navbar-item').forEach(function (item) {
    item.addEventListener('click', function () {
      if (burger && burger.classList.contains('is-active')) {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
      }
    });
  });

  // ---- Fade-in animation on scroll ----
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.feature-card, .phone-mockup-static').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
})();
