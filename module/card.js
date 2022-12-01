import getElement from './getElement.js';
//constructor function for card

class Card {
  constructor(element) {
    this.container = element;

    //declaration for cart card
    const notification = getElement('.notification');
    const alert = getElement('.alert');
    //this.CartItems = getElement('.cart-price');

    const addCartBtn = document.querySelectorAll('.btn-cart');
    const eachCartBtn = element.querySelector('.btn-cart');
    const value = element.querySelector('.number');
    const itemTitle = element.querySelector('.item__title');
    const newOffer = element.querySelector('.new__offer');

    const cartCard = document.querySelector('.cart-card');
    const emptyText = document.querySelector('.emptyText');
    let notifyValue = parseInt(notification.dataset.value);

    addCartBtn.forEach((cartBtn) => {
      cartBtn.addEventListener('click', () => {
        notification.classList.add('open');
        emptyText.style.display = 'none'; //removing the text
        notifyValue++;
        notification.textContent = notifyValue;
        console.log(notifyValue);
      });
    });
    //event listener for add to cart btn
    eachCartBtn.addEventListener('click', () => {
      //Dynamically adding the cart items
      const calc1 = newOffer.dataset.value;
      const calc2 = value.textContent;
      const result = calc1 * calc2;

      //create elment
      const cartElement = document.createElement('div');
      cartElement.classList.add('cart-price');

      cartElement.innerHTML = ` <img
                    class="cart-price-img"
                    src="./images/image-product-1-thumbnail.jpg"
                    alt=""
                  /><span class="cart-span"
                    ><span class="cart-text"
                      >${itemTitle.textContent}</span
                    >
                    <span class="card-cash">
                      <span class="price">${newOffer.dataset.value}</span> x
                      <span class="items">${value.textContent}</span>
                      <span class="result"><b>=${result}$</b> </span>
                    </span></span
                  >
                   <button class="icon-btn icon-delete">
                    <i>
                      <img src="./images/icon-delete.svg" alt="icon-delete"
                    /></i>
                  </button>
                   `;

      // <!--TODO: Append child-in between the horiontal row and checkout btn
      //parentElement.insertBefore(newElement, parentElement.children[2]);
      cartCard.insertBefore(cartElement, cartCard.children[2]);

      //DELETE ITEM-since i can acess these after it is dynamically added to the DOM
      this.deleteBtn = document.querySelectorAll('.icon-delete');
      this.deleteBtn.forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', (e) => {
          notifyValue--;
          console.log(notifyValue);
          notification.textContent = notifyValue;
          const element = e.currentTarget.parentElement; //removing the elment

          cartCard.removeChild(element);
          displayAlert('item deleted', 'delete');

          if (notifyValue === 0 || notifyValue < 0) {
            notification.classList.remove('open');
            emptyText.style.display = 'block'; //adding the text
          }
        });
      });
    });

    //ALERT function
    function displayAlert(text, action) {
      alert.textContent = text;
      alert.classList.add(`alert-${action}`);
      //remove alert
      setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
      }, 2000); //time in mili seconds
    }
  }
}

export default Card;