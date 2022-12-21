let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
let right = document.querySelector(".right");
let rahul = document.querySelector(".line2");
let rahul2 = document.querySelector(".line1");
let rahul3 = document.querySelector(".line3");

burger.addEventListener("click", () => {
  right.classList.toggle("v-class");
  navbar.classList.toggle("h-hight");
  rahul.classList.toggle("show");
  rahul2.classList.toggle("show");
  rahul3.classList.toggle("show");
});
