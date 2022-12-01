const toggleBtn = document.querySelector('.dark-btn');
const sun = document.querySelector('.fa-sun');
const circle = document.querySelector('.fa-circle-notch');
const moon = document.querySelector('.fa-moon');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-theme'); //acess the whole document body html

  sun.classList.toggle('move_sun');
  circle.classList.toggle('move_circle');
  moon.classList.toggle('move_moon');
});

export default toggleBtn;
