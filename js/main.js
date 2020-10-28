//your main.js

const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', (e) => {
  if (nav.classList[1] === 'show') {
    nav.classList.remove('show');
    menu.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    nav.classList.add('show');
    menu.innerHTML = '<i class="fas fa-times"></i>';
  }
});
