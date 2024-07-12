const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector(".close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const mainImg = document.querySelector("#MainImg");
const smallImg = document.querySelectorAll(".small-img");

smallImg.forEach((item) => {
  item.addEventListener("click", function () {
    mainImg.src = item.src;
  });
});

// smallImg[0].onclick = function () {
//   mainImg.src = smallImg[0].src;
// };
// smallImg[1].onclick = function () {
//   mainImg.src = smallImg[1].src;
// };
// smallImg[2].onclick = function () {
//   mainImg.src = smallImg[2].src;
// };
// smallImg[3].onclick = function () {
//   mainImg.src = smallImg[3].src;
// };

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion(event) {
      event.currentTarget.classList.toggle("ativo");
      event.currentTarget.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();
