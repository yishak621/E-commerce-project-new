# Frontend Mentor - E-commerce product page solution by Yishak Abrham

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it
- by clicking the checkout they choose a payment method and order shipping

### Screenshot

![](<./Screenshot%20(87).png>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://ecommerceyis.netlify.app/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- CSS Grid
- Mobile-first workflow
- Javascript Module file components
- [pure JS](https://vanillajs.org/) - vanilla JS
- JS constructor function
- [scss](https://styled-components.com/) - For styles

### What I learned

Even if these type of E-commerce projects are done with frameworks to make life easier but i challenge myself to the extreme building the components by pure vanilla JS . the method that i use to make the whole project is using constructor functions as a component of JS since they will build the a whole functionality after i envoke it for any place i want ...for these trial project i build three sections in the html for collection ,Men and Women. the collection is the section where the user see what type of new products are avaliable in the website so i just hardecoded it in html only but for the other sections the innerHTML is dynamically added by JS after i iterate over a data Array(in a real world we use cloud storages for our items to be stored but in these case i host data locally).
so as u can see in the index.html the sections will look like these

```html
<!--men section-->
<section id="men">
  <h1 class="section-title">Men shoes</h1>
  <div class="men-section">
    <!--filled by js-->
  </div>
</section>
```

in the JS we will load the innerHTML like these ,NOTE-the constructor function will recive two things one for section(that we want to invoke) and Array (array index of that section data)

```js
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
```

i also added cool features like page loading GIF ,collection cards feature,Night mode,checkout page.
for the checkout page in the country select input i use API to load countries and add them in to our select input

```js
const selectDrop = document.getElementById('countries');
const url = 'https://restcountries.com/v2/all';

export const country = window.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch(url);
  const data = await response.json();

  let output = '';
  data.forEach((countries) => {
    output += `<option value="${countries.name}">${countries.name}</option>`;
    selectDrop.innerHTML = output;
  });
});

export default country;
```

### Continued development

the contiuned development that i want to work on E-commerce is using local storage to add item and then using that data whenever i want in the index.html page or another checkout page ...due to limited time i didn't do it now but i will do it soon..

```js
const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    //if its true
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
}; //JSON.parse(from strings to object)
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
}; //JSON.stringify (from object to strings)

export { getStorageItem as getStore, setStorageItem as setStore };
```

## Author

- Website - [yishak abrham](https://app.netlify.com/teams/yishak621/overview)
- Frontend Mentor - [@yishak621](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

i want to thank you the frontend mentor for uploading the challenges and helpfull resources.
