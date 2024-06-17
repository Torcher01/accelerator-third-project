const burgerMenuButton = document.querySelector('.hero__header-burger-menu');
const burgerMenuIconWrapper = document.querySelector('.hero__header-burger-menu-icon-wrapper');
const burgerMenuText = document.querySelector('.hero__header-burger-menu-text');
const burgerMenuIconOpen = document.querySelector('.hero__header-burger-menu-icon--open');
const burgerMenuIconClose = document.querySelector('.hero__header-burger-menu-icon--close');

const headerMenu = document.querySelector('.hero__header-menu');
const menuInnerLists = document.querySelectorAll('.hero__header-menu-list--inner');
const menuItems = document.querySelectorAll('.hero__header-menu-item--expand');
const menuInnerListsArrows = document.querySelectorAll('.hero__header-menu-list-inner-arrow');
const menuItemLinks = document.querySelectorAll('.hero__header-menu-item-link');

const burgerMenuOpen = () => {
  burgerMenuButton.classList.add('hero__header-burger-menu--opened');
  document.body.classList.add('hero__header-burger-menu--background-shadow');
  headerMenu.classList.remove('hero__header-menu--closed');
  burgerMenuIconWrapper.classList.add('hero__header-burger-menu-icon-wrapper--opened');
  burgerMenuText.classList.add('hero__header-burger-menu-text--opened');
  burgerMenuIconOpen.classList.add('hero__header-burger-menu-icon--hidden');
  burgerMenuIconClose.classList.remove('hero__header-burger-menu-icon--hidden');

  burgerMenuButton.addEventListener('click', burgerMenuClose);
  burgerMenuButton.removeEventListener('click', burgerMenuOpen);
};

const burgerMenuClose = () => {
  burgerMenuButton.classList.remove('hero__header-burger-menu--opened');
  document.body.classList.remove('hero__header-burger-menu--background-shadow');
  headerMenu.classList.add('hero__header-menu--closed');
  burgerMenuIconWrapper.classList.remove('hero__header-burger-menu-icon-wrapper--opened');
  burgerMenuText.classList.remove('hero__header-burger-menu-text--opened');
  burgerMenuIconOpen.classList.remove('hero__header-burger-menu-icon--hidden');
  burgerMenuIconClose.classList.add('hero__header-burger-menu-icon--hidden');
  burgerMenuButton.addEventListener('click', burgerMenuOpen);
  burgerMenuButton.removeEventListener('click', burgerMenuClose);
};

burgerMenuButton.addEventListener('click', burgerMenuOpen);

document.body.addEventListener('click', (evt) => {
  const target = evt.target;
  if (!target.closest('.hero__header-burger-menu')
    && !target.closest('.hero__header-menu')
  ) {
    burgerMenuClose();
  }
});

menuItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    menuInnerLists[i].classList.toggle('hero__header-menu-list--hidden');
    menuInnerListsArrows[i].classList.toggle('hero__header-menu-list-inner-arrow--opened');
  });
});

menuItemLinks.forEach((link) => {
  link.addEventListener('click', burgerMenuClose);
});
