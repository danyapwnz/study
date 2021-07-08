let logo = document.querySelector('.logo svg');

const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('menu__burger--active');
  menu.classList.toggle('menu__list--active');
})

menuLink.forEach(function (link) {
  link.addEventListener('click', function () {
    burger.classList.remove('menu__burger--active');
    menu.classList.remove('menu__list--active');
  })
})

const header = document.querySelector('.header')

window.addEventListener('scroll', function () {
  let scrollDistance = window.scrollY;
  if (scrollDistance >= 50) {
    header.classList.add('header--active');
  } else {
    header.classList.remove('header--active');
  }
})


const tabsBtn = document.querySelectorAll('.blog__category');
const tabsItems = document.querySelectorAll('.blog__item');

tabsBtn.forEach(btn => {
  btn.addEventListener('click', () => {

    let tabId = btn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!btn.classList.contains('blog__category--active')) {
      tabsBtn.forEach(btn => btn.classList.remove('blog__category--active'));

      btn.classList.add('blog__category--active');
      tabsItems.forEach(item => item.classList.remove('blog__item--active'));

      currentTab.classList.add('blog__item--active')
    }
  })

  document.querySelector('.blog__category').click();
})


function addHandlers(count) {
  var minus = count.querySelector(".cart-counter__down");
  var input = count.querySelector(".cart-counter__input");
  var inputV = count.querySelector(".cart-counter__input").value;
  var plus = count.querySelector(".cart-counter__up");
  plus.addEventListener("click", function () {
    inputV = parseInt(inputV, 10);
    if (isNaN(inputV)) {
      inputV = 1;
    } else {
      inputV++;
    }
    input.value = inputV;
  })

  minus.addEventListener("click", function () {
    if (isNaN(inputV)) {
      inputV = 1;
      input.value = inputV;
    } else if (inputV > 1) {
      inputV--;
      input.value = inputV;
    }
  });
}

var counts = document.querySelectorAll(".cart-counter");
counts.forEach(addHandlers);


const filterItems = document.querySelectorAll('.filter-furniture__subtitle');

filterItems.forEach(item => {
  let tabId = item.getAttribute('data-filter')
  let currentTab = document.querySelector(tabId);

  item.addEventListener('click', () => {
    item.classList.toggle('filter-furniture__subtitle--active')
    currentTab.classList.toggle('filter-furniture__list--active')
  })
})

const btnFilter = document.querySelector('.catalog__filter-btn');
const btnFilterClose = document.querySelector('.filter-furniture__button-close');
const filterMenu = document.querySelector('.filter-furniture');
const body = document.querySelector('.main');
const overlay = document.querySelector('.overlay');


if (btnFilter) {
  btnFilter.addEventListener('click', () => {
    filterMenu.classList.add('filter-furniture--active');
    overlay.classList.add('overlay--active');
    body.classList.add('modal-open');
  })
}

if (btnFilterClose) {
  btnFilterClose.addEventListener('click', () => {
    filterMenu.classList.remove('filter-furniture--active');
    overlay.classList.remove('overlay--active');
    body.classList.remove('modal-open');
  })
}
$(function () {
  $('.reviews-home__slider').slick({
    arrows: true,
    prevArrow: $('.reviews-home__button--prev'),
    nextArrow: $('.reviews-home__button--next'),
    dots: true,

  })

  $('.product-one-card__slider').slick({
    arrows: false,
    dots: true,
  })

  $('.product-one-card__stars').rateYo({
    starWidth: "15px",
    normalFill: "#9C9FA6",
    ratedFill: "#2A364E",
    spacing: "5px",
    readOnly: true,
    starSvg: "<svg><use xlink: href = images/sprite.svg#star></use></svg>"
  })

  $('.product-one__stars').rateYo({
    starWidth: "24px",
    normalFill: "#9C9FA6",
    ratedFill: "#2A364E",
    spacing: "5px",
    readOnly: true,
    starSvg: "<svg><use xlink: href = images/sprite.svg#star></use></svg>"
  })

  $('.form-color__select').styler()
  $('.form-sort__select').styler()
  $('.form-ship__select').styler()

  if (location.pathname == '/blog.html' || location.pathname == '/catalog.html' || location.pathname == '/product-one.html' || location.pathname == '/cart.html') {
    $('.logo svg').css('fill', '#2A364E');
  }

})


