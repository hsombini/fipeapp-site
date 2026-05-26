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
  if (document.title.indexOf('{app}') === -1) {
    document.title = window.FipeApp.name + ' \u2014 Preços de Veículos na Palma da Mão';
  }

  var menuBtn = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  var carouselImages = document.querySelectorAll('.carousel-img');
  if (carouselImages.length > 0) {
    var currentIdx = 0;
    setInterval(function () {
      carouselImages[currentIdx].classList.remove('active');
      currentIdx = (currentIdx + 1) % carouselImages.length;
      carouselImages[currentIdx].classList.add('active');
    }, 4000);
  }
})();
