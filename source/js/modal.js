const modalOpenButton = document.querySelector('.about__more-info-button');
const modalWindow = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close-button');
const modalForm = document.querySelector('.modal__form');


modalOpenButton.addEventListener('click', () => {
  modalWindow.classList.remove('modal--closed');
});

modalCloseButton.addEventListener('click', () => {
  modalWindow.classList.add('modal--closed');
});

modalForm.addEventListener('submit', () => {
  modalWindow.classList.add('modal--closed');
});
