import getElement from './getElement.js';
//FIXED NAV BAR
const navbar = document.getElementById('nav');
const topLink = getElement('.top-link');
const linksContainer = getElement('.list');
const navList = getElement('.nav-list');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  //when the y-offset is greater than our navheight(87px in these case)
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  //scroll back to the top btn
  if (scrollHeight > 500) {
    //for our top button
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

export default window;

//Smooth scroll to the section
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault; //prevent default behavior of anchors
    const id = e.currentTarget.getAttribute('href').slice(1); //ommiting the # symbol
    const element = document.getElementById(id); //since we assign the same id name to the elments in html sections-we r searching that id
    const fixedNav = navbar.classList.contains('fixed-nav');
    //******calculate the heights */
    const navHeight = navbar.getBoundingClientRect().height; //105.18 px
    const containerHeight = linksContainer.getBoundingClientRect().height; //66.39px

    // let position = element.offsetTop + containerHeight;

    // if (!fixedNav) {
    //   position = position + navHeight;
    // }
    // if (navHeight > 82) {
    //   position = position + containerHeight;
    //   //console.log(position); //navHeight is increased at mobile version and //NOTE that the height of linksContainer is increased at mobile version
    // }
    // // window.scrollTo({
    //   left: 0,
    //   top: position,
    // });
    navList.classList.remove('nav-slide'); //for mobile version closing a sidebar
  });
});
