"use strict";

import * as navbar from "./navbar-module.js";
import "core-js/stable";

{
  // Burger Menu Functionality
  const burgerMenuLogo = document.querySelector(".burger-menu-icon");
  burgerMenuLogo.addEventListener("click", function () {
    navbar.burgerMenuClick();
  });
}
