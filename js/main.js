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
})();