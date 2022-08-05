"use-strict";

import * as model from "./model-module.js";
import * as navbar from "./navbar-module.js";
import "core-js/stable";

{
  // Burger Menu Functionality
  const burgerMenuLogo = document.querySelector(".burger-menu-icon");
  burgerMenuLogo.addEventListener("click", function () {
    navbar.burgerMenuClick();
  });

  //render basket items

  const renderBasketItems = function (basket) {
    document.querySelector(".basket-contents-display").innerHTML = " ";
    document.querySelector(".basket-overview-display").innerHTML = " ";
    const basketItems = basket
      .map((entry) => {
        return `<div class="basket-entry" data-id=${entry.id}>
    <div class="image-wrapper">
      <img
        src="${entry.imgUrl}"
        alt="${entry.title}"
      />
    </div>
    <div class="name-wrapper">
      <h2>${entry.title}</h2>
      <h4>Everlasting Terrarium</h4>
    </div>
    <div class="quantity-wrapper">
      <span class="material-symbols-outlined minus"> remove </span>
      <span class="quantity">${entry.quantity}</span>
      <span class="material-symbols-outlined plus"> add </span>
    </div>
    <div class="price-wrapper">
      <h2>£${entry.price}</h2>
    </div>
    <div class="delete-btn-wrapper">
      <span class="material-symbols-outlined"> close </span>
    </div>
  </div>`;
      })
      .join(" ");

    const basketOverviewNormal = `<div class="overview-heading"><h2>Summary</h2></div>
  <div class="overview-items">
    <h3>Items:</h3>
    <p>${basket.reduce((acc, curVal) => {
      return acc + curVal.quantity;
    }, 0)}</p>
  </div>
  <div class="overview-postage">
    <h3>Postage:</h3>
    <p>${
      basket.reduce((acc, curVal) => {
        return acc + curVal.quantity * curVal.price;
      }, 0) >= 50
        ? `Free`
        : `£4.99`
    }</p>
  </div>
  <div class="overview-total">
    <h3>Total:</h3>
    <p>£${
      basket
        .reduce((acc, curVal) => {
          return acc + curVal.quantity * curVal.price;
        }, 0)
        .toFixed(2) > 50
        ? basket
            .reduce((acc, curVal) => {
              return acc + curVal.quantity * curVal.price;
            }, 0)
            .toFixed(2)
        : basket
            .reduce((acc, curVal) => {
              return acc + curVal.quantity * curVal.price;
            }, 4.99)
            .toFixed(2)
    }</p>
  </div>
  <div class="checkout-btn">
    <button>Checkout</button>
  </div>`;

    const basketOverviewEmpty = `<div class="overview-heading"><h2>Summary</h2></div>
  <div class="overview-items">
    <h3>Items:</h3>
    <p></p>
  </div>
  <div class="overview-postage">
    <h3>Postage:</h3>
    <p></p>
  </div>
  <div class="overview-total">
    <h3>Total:</h3>
    <p></p>
  </div>
  <div class="checkout-btn">
    <button>Checkout</button>
  </div>`;

    const errorMessage = `<div class="basket-empty-error-message"><h3>Your basket is currently empty</h3></div>`;

    if (!basket || basket.length === 0) {
      document
        .querySelector(".basket-contents-display")
        .insertAdjacentHTML("afterbegin", errorMessage);

      document
        .querySelector(".basket-overview-display")
        .insertAdjacentHTML("afterbegin", basketOverviewEmpty);
    }

    if (basket.length > 0) {
      document
        .querySelector(".basket-contents-display")
        .insertAdjacentHTML("afterbegin", basketItems);

      document
        .querySelector(".basket-overview-display")
        .insertAdjacentHTML("afterbegin", basketOverviewNormal);
    }
  };

  // code to put in event handlers to push products to the basket
  const basketWrapper = document.querySelector(".basket-contents-display");

  basketWrapper.addEventListener("click", function (e) {
    const id = +e.target?.closest(".basket-entry").dataset.id;

    if (e.target.closest("div").classList.contains("quantity-wrapper")) {
      if (e.target.classList.contains("minus")) {
        model.decreaseQuantity(id);
        renderBasketItems(model.state.basket);
      }
      if (e.target.classList.contains("plus")) {
        model.increaseQuantity(id);
        renderBasketItems(model.state.basket);
      }
    }
    if (e.target.closest("div").classList.contains("delete-btn-wrapper")) {
      model.removeFromBasket(id);
      renderBasketItems(model.state.basket);
    }
  });

  // Show and hide modal window

  const modalWindow = document.querySelector(".modal-window");

  document
    .querySelector(".basket-overview-display")
    .addEventListener("click", function (e) {
      if (!e.target.closest("div").classList.contains("checkout-btn")) return;
      modalWindow.classList.remove("hide");
    });

  modalWindow.addEventListener("click", function (e) {
    if (!e.target === this) return;
    if (e.target === this) this.classList.add("hide");
  });

  window.addEventListener("unload", () => {
    model.saveToLocalStorage();
  });

  const init = function () {
    model.loadFromLocalStorage();
    renderBasketItems(model.state.basket);
  };
  init();
}
