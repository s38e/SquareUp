const btnFAQs = document.querySelectorAll(".icon-FAQ");
const textContainer = document.querySelectorAll(".FAQ-item");
const answer = document.querySelectorAll(".answer");

btnFAQs.forEach((btnFAQ) => {
  btnFAQ.addEventListener("click", () => {
    const textContainer = btnFAQ.closest(".FAQ-item");
    btnFAQ.classList.toggle("open");
    textContainer.classList.toggle("answerVisible");
  });
});

// -------------- Budget Progress -------------- //

const range = document.querySelectorAll(".range-slider input");
progress = document.querySelector(".range-slider .progress");
let gap = 1000;
const inputValue = document.querySelectorAll(".numberVal input");

range.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minrange = parseInt(range[0].value),
      maxrange = parseInt(range[1].value);

    if (maxrange - minrange < gap) {
      if (e.target.className === "range-min") {
        range[0].value = maxrange - gap;
      } else {
        range[1].value = minrange + gap;
      }
    } else {
      progress.style.left = (minrange / range[0].max) * 100 + "%";
      progress.style.right = 100 - (maxrange / range[1].max) * 100 + "%";
      inputValue[0].value = minrange;
      inputValue[1].value = maxrange;
    }
  });
});

// -------------- Open Menu and Height Header -------------- //

const menuBtn = document.querySelector("header .menu-btn");
const menu = document.querySelector(".menu");
var header = document.querySelector("header");
var headerLength = header.clientHeight;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

menu.style.height = "calc(100% - 4rem - " + headerLength + "px)";
menu.style.top = headerLength + "px";
