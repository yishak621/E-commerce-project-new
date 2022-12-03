//import module files
import getElement from './getElement.js';
import images from './array.js';

//Modal gallary
class Modalgallery {
  constructor(element, index) {
    this.container = element;
    this.list = [...element.querySelectorAll('.img')];
    this.newIndex = images[index];

    //Target
    this.modal = getElement('.modal'); //parent container
    this.modalImg = getElement('.modal-gallery'); //main-img
    this.modalSmall = getElement('.modal-small-img'); //parent container for small images
    this.closeBtn = getElement('.modal-close-btn');
    this.nextBtn = getElement('.modal-next-btn');
    this.prevBtn = getElement('.modal-prev-btn');
    //four basic functions BIND to the contaniner[element]
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.clickImage = this.clickImage.bind(this);

    const navbar = document.getElementById('nav');

    //container event listner
    this.container.addEventListener(
      'click',
      function (e) {
        if (e.target.parentElement.classList.contains('gallery')) {
          this.openModal(e.target, this.list);
          navbar.classList.remove('fixed-nav');
        }
      }.bind(this)
    );
  }
  //MAIN IMAGE
  setMainImg = function (selectedImage) {
    console.log(selectedImage);
    this.modalImg.innerHTML = `<img
                src="${selectedImage.src}"
                alt="product"
                class="modal-img selected"
              />`;
  };
  //OPEN MODAL function
  openModal = function (selectedImage, list) {
    this.setMainImg(selectedImage);

    this.modalSmall.innerHTML = list
      .map((image) => {
        return `<div class="${
          selectedImage.dataset.id === image.dataset.id
            ? 'image-wrapper selected'
            : 'image-wrapper '
        } ">
        <img
                src="${image.src}"
                alt="product-${image.dataset.id}"
                class="modal-img"
                data-id="${image.dataset.id}"
              /></div>`;
      })
      .join('');

    //opening the modal
    this.modal.classList.remove('close-modal');
    this.modal.classList.add('open-modal');
    //event listner for btns
    this.closeBtn.addEventListener('click', this.closeModal);
    this.nextBtn.addEventListener('click', this.nextImage);
    this.prevBtn.addEventListener('click', this.prevImage);
    this.modalSmall.addEventListener('click', this.clickImage);
  };

  //CLOSE MODAL <!--TODO: VERY IMPORTANT
  closeModal = function () {
    this.modal.classList.add('close-modal');
    this.modal.classList.remove('open-modal');
    //remove events
    this.closeBtn.removeEventListener('click', this.closeModal);
    this.nextBtn.removeEventListener('click', this.nextImage);
    this.prevBtn.removeEventListener('click', this.prevImage);
    this.modalSmall.removeEventListener('click', this.clickImage);
  };
  //next image function
  nextImage = function () {
    const selected = this.modalSmall.querySelector('.selected');
    const next =
      selected.nextElementSibling || this.modalSmall.firstElementChild;

    selected.classList.remove('selected');
    next.classList.add('selected');
    //setMainImg
    const selector = next.firstElementChild.dataset.id;

    this.setMainImg(this.newIndex[selector]);
  };
  //prev image function
  prevImage = function () {
    const selected = this.modalSmall.querySelector('.selected');
    const prev =
      selected.previousElementSibling || this.modalSmall.lastElementChild;

    selected.classList.remove('selected');
    prev.classList.add('selected');
    //setMainImg
    const selector = prev.firstElementChild.dataset.id;
    this.setMainImg(this.newIndex[selector]);
  };
  //click image
  clickImage = function (e) {
    if (e.target.classList.contains('image-wrapper')) {
      const selected = this.modalSmall.querySelector('.selected');
      selected.classList.remove('selected');

      const selector = e.target.firstElementChild.dataset.id;
      this.setMainImg(this.newIndex[selector]);

      e.target.classList.add('selected');
    }
  };
}

export default Modalgallery;
