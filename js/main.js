//your main.js

const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', (e) => {
  nav.classList.toggle('show');
});
