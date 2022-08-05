"use strict";

import * as carousel from "./carousel-module.js";
import * as navbar from "./navbar-module.js";
import "core-js/stable";

{
  // Burger Menu Functionality
  const burgerMenuLogo = document.querySelector(".burger-menu-icon");
  burgerMenuLogo.addEventListener("click", function () {
    navbar.burgerMenuClick();
  });

  // Hover-switch images
  const bestSellersSummerPic = document.querySelector(".summer");
  const bestSellersDesertPic = document.querySelector(".desert");

  bestSellersSummerPic.addEventListener("mouseover", (e) => {
    e.preventDefault();
    bestSellersSummerPic.querySelector("img").src =
      "/summer-garden-real.cefe388f.jpg";
  });

  bestSellersSummerPic.addEventListener("mouseout", (e) => {
    e.preventDefault();
    bestSellersSummerPic.querySelector("img").src =
      "/summer-garden-white.9919ecbd.jpg";
  });

  bestSellersDesertPic.addEventListener("mouseover", (e) => {
    e.preventDefault();
    bestSellersDesertPic.querySelector("img").src = "/desert-real.add2616b.jpg";
  });

  bestSellersDesertPic.addEventListener("mouseout", (e) => {
    e.preventDefault();
    bestSellersDesertPic.querySelector("img").src =
      "/desert-white.f45676ac.jpg";
  });

  //Image Carousel Event Handlers
  const imageCarouselWrapper = document.querySelector(".carousel-flexbox-row");
  const imgArrowLeft = imageCarouselWrapper.querySelector(".images-arrow-left");
  const imgArrowRight = imageCarouselWrapper.querySelector(
    ".images-arrow-right"
  );
  const imagesSlates = imageCarouselWrapper.querySelectorAll(".column");

  imgArrowLeft.addEventListener("click", function () {
    carousel.scrollCarouselLeft(imagesSlates);
  });

  imgArrowRight.addEventListener("click", function () {
    carousel.scrollCarouselRight(imagesSlates);
  });

  // To switch to image carousel and back
  window.addEventListener("resize", function (e) {
    if (e.target.innerWidth > 768) {
      imagesSlates.forEach((c, i) => {
        c.dataset.id = i;
        c.style.transform = "translate(0)";
      });
    }
    if (e.target.innerWidth <= 768) {
      imagesSlates.forEach((c, i) => {
        c.dataset.id = i;
        c.style.transform = `translate(${i * 100}%)`;
      });
    }
  });

  window.addEventListener("load", function () {
    if (this.innerWidth > 768) {
      imagesSlates.forEach((c, i) => {
        c.dataset.id = i;
        c.style.transform = "translate(0)";
      });
    }
    if (this.innerWidth <= 768) {
      imagesSlates.forEach((c, i) => {
        c.dataset.id = i;
        c.style.transform = `translate(${i * 100}%)`;
      });
    }
  });
}

{
  // Review Carousel Event Handlers
  const reviewCarouselWrapper = document.querySelector(".review-carousel");
  const reviewArrowLeft =
    reviewCarouselWrapper.querySelector(".review-arrow-left");
  const reviewArrowRight = reviewCarouselWrapper.querySelector(
    ".review-arrow-right"
  );
  const reviewSlates = reviewCarouselWrapper.querySelectorAll(".full-review");

  reviewArrowLeft.addEventListener("click", function () {
    carousel.scrollCarouselLeft(reviewSlates);
  });

  reviewArrowRight.addEventListener("click", function () {
    carousel.scrollCarouselRight(reviewSlates);
  });
}
