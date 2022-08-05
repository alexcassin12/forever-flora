"use strict";

import * as carousel from "./carousel-module.js";
import * as model from "./model-module.js";
import * as navbar from "./navbar-module.js";
import "core-js/stable";

{
  // Burger Menu Functionality
  const burgerMenuLogo = document.querySelector(".burger-menu-icon");
  burgerMenuLogo.addEventListener("click", function () {
    navbar.burgerMenuClick();
  });

  // Image Carousel Functionality
  const carouselWrapper = document.querySelector(".carousel-flexbox-row");
  const imgsArrowLeft = carouselWrapper.querySelector(
    ".product-pics-arrow-left"
  );
  const imgsArrowRight = carouselWrapper.querySelector(
    ".product-pics-arrow-right"
  );
  const imagesSlates = carouselWrapper.querySelectorAll(".carousel-slide");

  imgsArrowLeft.addEventListener("click", function () {
    carousel.scrollCarouselLeft(imagesSlates);
  });

  imgsArrowRight.addEventListener("click", function () {
    carousel.scrollCarouselRight(imagesSlates);
  });

  // Swipe to scroll image carousel handlers
  const imageCarouselSlateBox = document.querySelector(
    ".pics-carousel-container"
  );
  let startPosition;

  imageCarouselSlateBox.addEventListener("mousedown", (e) => {
    e.preventDefault();
    startPosition = e.pageX;
  });

  imageCarouselSlateBox.addEventListener("mouseup", (e) => {
    const endPosition = e.pageX;
    carousel.swipeToScrollCarousel(startPosition, endPosition, imagesSlates);
  });

  //Add to cart functionality
  const addToCartBtn = document.querySelector(".add-to-cart-btn");

  addToCartBtn.addEventListener("click", function () {
    const id = Number(this.dataset.id);
    model.addToBasket(id);

    const basketBtn = document
      .querySelector(".cart-btn")
      .querySelector(".material-symbols-outlined");

    basketBtn.classList.add("flash");
    setTimeout(() => basketBtn.classList.remove("flash"), 600);

    const btn = this.querySelector("span");
    btn.classList.add("flash");
    btn.textContent = " done ";
    setTimeout(() => {
      btn.classList.remove("flash");
      btn.textContent = " add_shopping_cart";
    }, 600);
  });

  // Save basket to local storage when page closes
  window.addEventListener("unload", () => {
    model.saveToLocalStorage();
  });

  const init = () => {
    model.loadFromLocalStorage();
  };
  init();
}
