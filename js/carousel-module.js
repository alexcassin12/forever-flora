"use strict";

// Pass in the items you want as a node list.

export const scrollCarouselLeft = function (slates) {
  slates.forEach((s) => {
    s.style.transform = `translate(${(+s.dataset.id + 1) * 100}%)`;
    s.dataset.id = +s.dataset.id + 1;
  });
  if (Number(slates[0].dataset.id) == 1) {
    slates.forEach((s) => {
      s.dataset.id = Number(s.dataset.id) - slates.length;
      s.style.transform = `translate(${+s.dataset.id * 100}%)`;
    });
  }
};

export const scrollCarouselRight = function (slates) {
  slates.forEach((s) => {
    s.style.transform = `translate(${(+s.dataset.id - 1) * 100}%)`;
    s.dataset.id = +s.dataset.id - 1;
  });
  if (Number(slates[0].dataset.id) == -slates.length) {
    slates.forEach((s) => {
      s.dataset.id = Number(s.dataset.id) + slates.length;
      s.style.transform = `translate(${+s.dataset.id * 100}%)`;
    });
  }
};

export const swipeToScrollCarousel = function (
  startPosition,
  endPosition,
  slates
) {
  const diff = startPosition - endPosition;
  if (diff < 100 && diff > -100) return;
  if (diff > 100) scrollCarouselRight(slates);
  if (diff < -100) scrollCarouselLeft(slates);
};
