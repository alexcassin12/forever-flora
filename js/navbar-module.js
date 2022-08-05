"use strict";

export const burgerMenuClick = function () {
  const navLinks = document.querySelector(".nav-links");

  if (navLinks.style.display === "block") {
    navLinks.style.display = "";
  } else {
    navLinks.style.display = "block";
  }
};
