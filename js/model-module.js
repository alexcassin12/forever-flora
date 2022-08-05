"use strict";

export const state = {
  basket: [],

  zenGarden: {
    id: 1,
    title: "The Zen Garden",
    imgUrl: "/zen-garden-white.a80a57a0.jpg",
    price: 39.99,
    quantity: 1,
  },
  summerGarden: {
    id: 2,
    title: "The Summer Garden",
    imgUrl: "/summer-garden-white.9919ecbd.jpg",
    price: 39.99,
    quantity: 1,
  },
  winterGarden: {
    id: 3,
    title: "The Winter Garden",
    imgUrl: "/winter-garden-white.cc4f1ae5.jpg",
    price: 39.99,
    quantity: 1,
  },
  succulentCollection: {
    id: 4,
    title: "The Succulent Collection",
    imgUrl: "/succulent-collection-white.89b1ac8b.jpg",
    price: 39.99,
    quantity: 1,
  },
  desert: {
    id: 5,
    title: "The Desert",
    imgUrl: "/desert-white.f45676ac.jpg",
    price: 39.99,
    quantity: 1,
  },
};

// Save and get from Local Storage
export const loadFromLocalStorage = function () {
  if (localStorage.getItem("userBasket") !== null) {
    const response = localStorage.getItem("userBasket");
    const data = JSON.parse(response);
    state.basket = data;
  }
};

export const saveToLocalStorage = function () {
  localStorage.setItem("userBasket", JSON.stringify(state.basket));
};

// Change Basket

export const addToBasket = function (id) {
  const basketSearch = state.basket.find((e) => {
    return e.id === id;
  });
  if (!basketSearch) {
    if (id === 1) state.basket.push(state.zenGarden);
    if (id === 2) state.basket.push(state.summerGarden);
    if (id === 3) state.basket.push(state.winterGarden);
    if (id === 4) state.basket.push(state.succulentCollection);
    if (id === 5) state.basket.push(state.desert);
  }
  if (basketSearch) {
    basketSearch.quantity++;
  }
};

export const removeFromBasket = function (id) {
  const basketSearch = state.basket.filter((e) => {
    return e.id != id;
  });
  state.basket = basketSearch;
};

export const increaseQuantity = function (id) {
  const item = state.basket.find((e) => e.id === id);
  item.quantity++;
};

export const decreaseQuantity = function (id) {
  const item = state.basket.find((e) => e.id === id);
  if (item.quantity === 1) removeFromBasket(id);
  if (item.quantity > 1) item.quantity--;
};
