const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = slides.length - 1;
let next = 1;
let prev2 = slides.length - 2;
let next2 = 2;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
  current = number;
  prev = current - 1;
  next = current + 1;
  prev2 = current - 2;
  next2 = current + 2;

  if (next >= slides.length) {
    next = 0;
  }
  if (prev < 0) {
    prev = slides.length - 1;
  }
  if (next2 >= slides.length) {
    next2 = next2 - slides.length;
  }
  if (prev2 < 0) {
    prev2 = slides.length + prev2;
  }

  slides.forEach(slide => slide.classList.remove("active", "prev", "next", "prev2", "next2"));
  
  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
  slides[prev2].classList.add("prev2");
  slides[next2].classList.add("next2");
};
