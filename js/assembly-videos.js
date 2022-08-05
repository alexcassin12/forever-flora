"use strict";

import * as navbar from "./navbar-module.js";
import "core-js/stable";

{
  // Heading Burger Menu Functionality
  const burgerMenuLogo = document.querySelector(".burger-menu-icon");
  burgerMenuLogo.addEventListener("click", function () {
    navbar.burgerMenuClick();
  });

  // Videos Burger Menu Functionality
  const videoBurgerMenuLogo = document.querySelector(
    ".videos-burger-menu-icon"
  );
  videoBurgerMenuLogo.addEventListener("click", function () {
    const navLinks = document.querySelector(".video-nav");

    if (navLinks.style.display === "block") {
      navLinks.style.display = "";
    } else {
      navLinks.style.display = "block";
    }
  });

  const vidBtns = document.querySelectorAll(".vid-btn");
  const video = document.querySelector(".assembly-videos");
  vidBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      vidBtns.forEach((x) => {
        x.classList.remove("active");
      });
      this.classList.add("active");
      const { link } = this.dataset;
      video.src = `https://www.youtube.com/embed/${link}`;
    });
  });
}
