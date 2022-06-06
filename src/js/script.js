import Swiper from "./swiper-bundle.js";

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 24,
      allowSlideNext: false,
      allowSlidePrev: false
    },
    1120: {
      spaceBetween: 32,
      allowSlideNext: false,
      allowSlidePrev: false
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const main = document.querySelector('.main');

function buttonHandler(wrapper, wrapperClass, button, buttonClass) {
  return function changer() {
    if (wrapper.classList.contains(wrapperClass)) {
      wrapper.classList.remove(wrapperClass);
      button.textContent = 'Скрыть';
      button.classList.add(buttonClass);
    } else {
      wrapper.classList.add(wrapperClass);
      button.textContent = 'Показать всё';
      button.classList.remove(buttonClass);
    }
  }
}

/*repairBrands*/

const repairBrandsButtonMore = main.querySelector('.repair-brands__button-more');

const repairBrandWrapper = main.querySelector('.repair-brands__swiper-wrapper');

const repairBrandsButtonHandler = buttonHandler(repairBrandWrapper, 'repair-brands__swiper-wrapper--hidden', repairBrandsButtonMore, 'repair-brands__button-more--rotate' );

repairBrandsButtonMore.addEventListener('click', repairBrandsButtonHandler);

/*repairTechnics*/

const repairTechnicsButtonMore = main.querySelector('.repair-technics__button-more');

const repairTechnicsWrapper = main.querySelector('.repair-technics__swiper-wrapper');

const repairTechnicsButtonHandler = buttonHandler(repairTechnicsWrapper, 'repair-technics__swiper-wrapper--hidden', repairTechnicsButtonMore, 'repair-technics__button-more--rotate' );

repairTechnicsButtonMore.addEventListener('click', repairTechnicsButtonHandler);

/*companyInfo*/

const companyInfoButtonMore = main.querySelector('.company-info__button-more');

const companyInfoText = main.querySelector('.company-info__text');

const companyInfoButtonHandler = buttonHandler(companyInfoText, 'company-info__text--hidden', companyInfoButtonMore, 'company-info__button-more--rotate' );

companyInfoButtonMore.addEventListener('click', companyInfoButtonHandler);

/**/

const blur = document.querySelector('.blur');

const headerWrapper = document.querySelector('.header');

const burgerButton = headerWrapper.querySelector('.button-link__logo--burger');

const mobileMenu = document.querySelector('.mobile-menu');

burgerButton.addEventListener('click', function () {
  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    mobileMenu.classList.remove('mobile-menu--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '5';
  }
});

function closeMenu() {
  if (!mobileMenu.classList.contains('mobile-menu--hidden')) {
    mobileMenu.classList.add('mobile-menu--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '-1';
  }
}

/*modalCall*/

const modalCall = document.querySelector('.modal-call');

function openCallModal() {
  if (modalCall.classList.contains('modal-call--hidden')) {
    modalCall.classList.remove('modal-call--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '8';
    modalCall.focus();
  }
}

function closeCallModal() {
  if (!modalCall.classList.contains('modal-call--hidden')) {
    modalCall.classList.add('modal-call--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '6';
  }
  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    blur.style.zIndex = '-1';
  }
}

const openModalCallButton = mobileMenu.querySelector('.mobile-button-link__btn--call');

openModalCallButton.addEventListener('click', openCallModal);

const headerOpenModalCallButton = headerWrapper.querySelector('.button-link__logo--call');

headerOpenModalCallButton.addEventListener('click', openCallModal);

const closeModalCallButton = modalCall.querySelector('.modal-call__btn--close');

closeModalCallButton.addEventListener('click', closeCallModal);

/*modalFeedback*/

const modalFeedback = document.querySelector('.modal-feedback');

function openFeedbackModal() {
  if (modalFeedback.classList.contains('modal-feedback--hidden')) {
    modalFeedback.classList.remove('modal-feedback--hidden');
    document.body.style.overflow = 'hidden';
    blur.style.zIndex = '8';
    modalFeedback.focus();
  }
}

function closeFeedbackModal() {
  if (!modalFeedback.classList.contains('modal-feedback--hidden')) {
    modalFeedback.classList.add('modal-feedback--hidden');
    document.body.style.overflow = 'auto';
    blur.style.zIndex = '6';
  }
  if (mobileMenu.classList.contains('mobile-menu--hidden')) {
    blur.style.zIndex = '-1';
  }
}

const openModalFeedbackButton = mobileMenu.querySelector('.mobile-button-link__btn--chat');

openModalFeedbackButton.addEventListener('click', openFeedbackModal);

const headerOpenModalFeedbackButton = headerWrapper.querySelector('.button-link__logo--chat');

headerOpenModalFeedbackButton.addEventListener('click', openFeedbackModal);

const closeModalFeedbackButton = modalFeedback.querySelector('.modal-feedback__btn--close');

closeModalFeedbackButton.addEventListener('click', closeFeedbackModal);

/**/

function closeAllWindows() {
  closeMenu();
  closeCallModal();
  closeFeedbackModal();
}

const closeMenuButton = mobileMenu.querySelector('.mobile-button-link__btn--close');

closeMenuButton.addEventListener('click', closeMenu );

blur.addEventListener('click', closeAllWindows);
