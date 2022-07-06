let hamburgerMenu = document.querySelector('.hamburger');
let dropMenu = document.querySelector('.nav');
hamburgerMenu.addEventListener('click', function () {
  hamburgerMenu.classList.toggle('is-active');
  dropMenu.classList.toggle('is-active');
})