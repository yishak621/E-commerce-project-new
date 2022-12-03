//import module files
import getElement from './module/getElement.js';
import Counter from './module/counter.js';
import images from './module/array.js';
import Gallery from './module/constructorMob.js';
import Modalgallery from './module/modal.js';
import Card from './module/card.js';

import toggleBtn from './module/darkmode.js';
import { menArray, womenArray } from './module/data.js';
import { scroll } from './module/fixedNavBar.js';
import newwindow from './module/fixedNavBar.js';

//Declaration
const menu = getElement('.menu__icon');
const navList = getElement('.nav-list');
const closeBtn = getElement('.close-icon');
//const mainImgContainer = getElement('.gallery');

const navCartBtn = getElement('.nav-cart-btn');
const cartCard = getElement('.cart-card');
const btnCheckout = getElement('.btn-checkout');
//Event listner for menu and close btn
menu.addEventListener('click', () => {
  navList.classList.add('nav-slide');
});

closeBtn.addEventListener('click', () => {
  navList.classList.remove('nav-slide');
});

//when the user maximize the screen size and if the sidebar is open
//<!--TODO: VERY IMPORTANT
window.addEventListener('resize', function () {
  if (window.matchMedia('(min-width: 800px)').matches) {
    navList.classList.remove('nav-slide');
  }
});

//event listner for navCartBtn
navCartBtn.addEventListener('click', () => {
  cartCard.classList.toggle('open-cart');
});
//CHECKOUT ITEM
const cart = getElement('.cart');
const checkoutCloseBtn = getElement('.checkout-close-btn');
const checkoutWrapper = getElement('.checkout-wrapper');
const navbar = document.getElementById('nav');

btnCheckout.addEventListener('click', function () {
  //cart.innerHTML = `<span class="alert__success">your order is successfull </span>`;
  checkoutWrapper.classList.add('show');
  navbar.classList.remove('fixed-nav');
});

checkoutCloseBtn.addEventListener('click', () => {
  checkoutWrapper.classList.remove('show');
});

//AVATAR IMG
const avatarImg = getElement('.avatar__img');
avatarImg.addEventListener('click', function () {
  avatarImg.classList.toggle('active');
});

//Dynamically adding items
const menSection = getElement('.men-section');
const womenSection = getElement('.women-section');

//ADD ITEM FUNCTION
function iterateOverArray(section, array) {
  section.innerHTML = array
    .map((eachArray) => {
      const {
        blockname,
        mainImgSrc,
        smallMenArray,
        textClass,
        companyName,
        itemTitle,
        description,
        newOffer,
        rate,
        oldPrice,
      } = eachArray;

      return `
  <!--start of single article-->
<article class="main-section" >
  <div class="${blockname}">
    <!-- prev next buttons -->
    <button class="icon-btn prev-btn prev-mob">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="icon-btn next-btn next-mob">
      <i class="fas fa-chevron-right"></i>
    </button>
    <!--Main img -->
    <picture class="gallery">
      <img
        class="main-img selected"
        src="${mainImgSrc}"
        alt="product"
        data-id="0"
      />
    </picture>
    <!--small tag image container-->
    <div class="small-img">
      <div class="image-wrapper selected" data-id="0">
        <img
          src="${smallMenArray.src1}"
          alt="product-1"
          class="img"
          data-id="0"
        />
      </div>
      <div class="image-wrapper" data-id="1">
        <img
          src="${smallMenArray.src2}"
          alt="product-2"
          class="img"
          data-id="1"
        />
      </div>
      <div class="image-wrapper" data-id="2">
        <img
          src="${smallMenArray.src3}"
          alt="product-3"
          class="img"
          data-id="2"
        />
      </div>
      <div class="image-wrapper" data-id="3">
        <img
          src="${smallMenArray.src4}"
          alt="product-4"
          class="img"
          data-id="3"
        />
      </div>
    </div>
  </div>
  <!--product text-->
  <div class="product-text ${textClass}">
    <h1>${companyName}</h1>
    <h2 class="item__title">${itemTitle}</h2>
    <p>
      ${description}
    </p>
    <span class="price__tag"
      ><span class="new__price"
        ><span class="new__offer" data-value="${newOffer}">$${newOffer}</span>
        <span class="rate">${rate}%</span></span
      ><span class="old__price">$${oldPrice}</span></span
    >
    <div class="btn-flex">
      <span class="counter"
        ><button class="icon-btn counter-btn minus">
          <i><img src="/images/icon-minus.svg" alt="minus" /></i>
        </button>
        <span class="number">0</span>
        <button class="icon-btn counter-btn plus">
          <i><img src="/images/icon-plus.svg" alt="plus" /> </i>
        </button>
      </span>
      <button class="btn btn-cart">
        <i><img src="./images/icon-cart.svg" alt="cart" /></i> Add to Cart
      </button>
    </div>
  </div>
</article>
<!--end of single article-->
`;
    })
    .join('');
}
//INVOKING
iterateOverArray(menSection, menArray);
iterateOverArray(womenSection, womenArray);

//INVOKING for modal gallery
//MEN section
const modalgallery = new Modalgallery(getElement('.images'), 0);
const modalgalleryOne = new Modalgallery(getElement('.image-one'), 1);
const modalgalleryTwo = new Modalgallery(getElement('.image-two'), 2);
const modalgalleryThree = new Modalgallery(getElement('.image-three'), 3);
const modalgalleryFour = new Modalgallery(getElement('.image-four'), 4);
const modalgalleryFive = new Modalgallery(getElement('.image-five'), 5);
const modalgallerySix = new Modalgallery(getElement('.image-six'), 6);
const modalgallerySeven = new Modalgallery(getElement('.image-seven'), 7);

//WOMEN section
const modalgalleryGirl = new Modalgallery(getElement('.images-girl'), 8);
const modalgalleryGirlOne = new Modalgallery(getElement('.images-girl-one'), 9);
const modalgalleryGirlTwo = new Modalgallery(
  getElement('.images-girl-two'),
  10
);
const modalgalleryGirlThree = new Modalgallery(
  getElement('.images-girl-three'),
  11
);

//MOBILE VERSION
//MEN section
const imageContainer = new Gallery(getElement('.images'), 0);
const imageContainerOne = new Gallery(getElement('.image-one'), 1);
const imageContainerTwo = new Gallery(getElement('.image-two'), 2);
const imageContainerThree = new Gallery(getElement('.image-three'), 3);
const imageContainerFour = new Gallery(getElement('.image-four'), 4);
const imageContainerFive = new Gallery(getElement('.image-five'), 5);
const imageContainerSix = new Gallery(getElement('.image-six'), 6);
const imageContainerSeven = new Gallery(getElement('.image-seven'), 7);

//WOMEN section
const imageContainerGirl = new Gallery(getElement('.images-girl'), 8);
const imageContainerGirlOne = new Gallery(getElement('.images-girl-one'), 9);
const imageContainerGirlTwo = new Gallery(getElement('.images-girl-two'), 10);
const imageContainerGirlThree = new Gallery(
  getElement('.images-girl-three'),
  11
);

//Counter MEN section
const counter = new Counter(getElement('.para-one'));
const counterOne = new Counter(getElement('.para-two'));
const counterTwo = new Counter(getElement('.para-three'));
const counterThree = new Counter(getElement('.para-four'));
const counterFour = new Counter(getElement('.para-five'));
const counterFive = new Counter(getElement('.para-six'));
const counterSix = new Counter(getElement('.para-seven'));
const counterSeven = new Counter(getElement('.para-eight'));

//Counter WOMEN section
const counterGirlOne = new Counter(getElement('.para-girl-one'));
const counterGirlTwo = new Counter(getElement('.para-girl-two'));
const counterGirlThree = new Counter(getElement('.para-girl-three'));
const counterGirlFour = new Counter(getElement('.para-girl-four'));

//CARD invoking
//Men section
const cardDisplay = new Card(getElement('.para-one'));
const cardDisplayOne = new Card(getElement('.para-two'));
const cardDisplayTwo = new Card(getElement('.para-three'));
const cardDisplayThree = new Card(getElement('.para-four'));
const cardDisplayFour = new Card(getElement('.para-five'));
const cardDisplayFive = new Card(getElement('.para-six'));
const cardDisplaySix = new Card(getElement('.para-seven'));
const cardDisplaySeven = new Card(getElement('.para-eight'));

//Women section
const cardDisplayGirlOne = new Card(getElement('.para-girl-one'));
const cardDisplayGirlTwo = new Card(getElement('.para-girl-two'));
const cardDisplayGirlThree = new Card(getElement('.para-girl-three'));
const cardDisplayGirlFour = new Card(getElement('.para-girl-four'));

//page loading gif
const loading = getElement('.page-loading');
window.addEventListener('load', function () {
  loading.style.display = 'none';
});
