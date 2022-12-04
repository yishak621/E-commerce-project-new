//import module files
import getElement from './getElement.js';
import images from './array.js';

//declaration
//const mainImgContainer = getElement('.gallery');

//Prev and Next btn functionallity using constructor function
class Gallery {
  constructor(element, index) {
    //declaration
    this.container = element;
    const gallery = element.querySelector('.gallery');
    this.mainImg = getElement('.selected');
    const newIndex = images[index];

    //function for parent container
    let count = 0;
    this.container.addEventListener('click', function (e) {
      const style = e.target.classList;

      if (style.contains('prev-mob')) {
        count--;
        if (count < 0) {
          count = newIndex.length - 1;
          SetMainImage(count);
        }
      } else if (style.contains('next-mob')) {
        count++;
        if (count > newIndex.length - 1) {
          count = 0;
          SetMainImage(count);
        }
      }

      //functionallity for small thumbnails
      this.smallImg = element.querySelector('.small-img');

      this.smallImg.addEventListener('click', function (e) {
        const id = e.target.dataset.id;

        if (id) {
          this.imageWrapper = [...element.querySelectorAll('.image-wrapper')];

          //remove active selected class from other images
          this.imageWrapper.forEach((wrapper) => {
            wrapper.classList.remove('selected');
            e.target.classList.add('selected');
          });
        }
      });

      //setMain image function
      function SetMainImage(input) {
        //main image

        const currentImgObj = newIndex[input];
        const currentImgSrc = currentImgObj.src;
        gallery.innerHTML = `<img
                      class="selected"
                      src="${currentImgSrc}"
                      alt="product-${input}"
                      data-id="${input}"
                    />`;
        return gallery;
      }
      //for the mobile version and for pc version
      if (count) {
        SetMainImage(count);
      } else if (e.target.dataset.id) {
        SetMainImage(e.target.dataset.id);
      }
    });
  }
}

export default Gallery;
