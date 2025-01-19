document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navItems = document.querySelector('.nav-items');

    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      navItems.style.display = navItems.style.display === 'flex' ? 'none' : 'flex';
    });
  });