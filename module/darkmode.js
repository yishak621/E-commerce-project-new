import getElement from './getElement.js';
const toggleBtn = getElement('.dark-btn');
const sun = getElement('.fa-sun');
const circle = getElement('.fa-circle-notch');
const moon = getElement('.fa-moon');

const logoNightMode = getElement('.logo-night-mode');
const logo = getElement('.logo-day-mode');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme'); //acess the whole document body html

  sun.classList.toggle('move_sun');
  circle.classList.toggle('move_circle');
  moon.classList.toggle('move_moon');
  if (logoNightMode.classList.contains('hide-logo')) {
    logoNightMode.classList.remove('hide-logo');
    logo.classList.add('hide-logo');
  } else {
    logoNightMode.classList.add('hide-logo');
    logo.classList.remove('hide-logo');
  }
});

export default toggleBtn;
