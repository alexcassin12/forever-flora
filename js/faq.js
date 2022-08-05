"use strict";

import * as navbar from "./navbar-module.js";
import "core-js/stable";

{
  // Burger Menu Functionality
  const burgerMenuLogo = document.querySelector(".burger-menu-icon");
  burgerMenuLogo.addEventListener("click", function () {
    navbar.burgerMenuClick();
  });

  const acc = document.querySelectorAll(".accordion");
  acc.forEach((e) => {
    e.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = "";
        this.querySelector("span").innerHTML = "add";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        this.querySelector("span").innerHTML = "remove";
      }
    });
  });
}
