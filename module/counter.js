import getElement from './getElement.js';
//declaration

class Counter {
  constructor(element) {
    const counterBtn = element.querySelectorAll('.counter-btn');
    const value = element.querySelector('.number');

    //let
    let count = 0;
    //eventlistner for all btns
    counterBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList;
        if (style.contains('minus')) {
          count--;
        } else if (style.contains('plus')) {
          count++;
        }
        if (count < 0) {
          //since we dont want to be less than 0
          return (count = 0);
        }
        value.textContent = count;
      });
    });
  }
}

export default Counter;
