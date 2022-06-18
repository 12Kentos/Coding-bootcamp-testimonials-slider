"use strict";

const testimonialsArrowsEl = document.querySelector(".testimonials__arrows");
const tanyaEl = document.querySelector(".tanya");
const johnEl = document.querySelector(".john");
const testimonialsTextTanyaEl = document.querySelector(
  ".testimonials__text-tanya"
);
const testimonialsTextJohnEl = document.querySelector(
  ".testimonials__text-john"
);

const toggle = function () {
  tanyaEl.classList.toggle("active");
  johnEl.classList.toggle("active");
  testimonialsTextTanyaEl.classList.toggle("text-active");
  testimonialsTextJohnEl.classList.toggle("text-active");
};

testimonialsArrowsEl.childNodes.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    toggle();
  });
});
