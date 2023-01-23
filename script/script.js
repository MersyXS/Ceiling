const page = document.querySelector(".page");
const popup = document.querySelector(".popup");
const buttonOpen = document.querySelector(".header__burger");
const buttonClose = document.querySelector(".popup__close-button");
const cbox = document.querySelectorAll(".popup__url");
const imageContainer = document.querySelector(".popup__img");

const imagePopup = document.querySelector(".image-popup");
const imageBox = document.querySelector(".project__image");

for (let i = 0; i < cbox.length; i++) {
  cbox[i].addEventListener("click", closePopup);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  page.classList.add("page_overflow");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  page.classList.remove("page_overflow");
}

document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = document.querySelector(".scroll").offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

document.querySelectorAll(".project__image").forEach((zoom) => {
  zoom.addEventListener("click", function (e) {
    const target = e.target;
    const imageSrc = zoom.src;
    imageContainer.src = imageSrc;
    imagePopup.classList.add("popup_opened");
  });
});

buttonOpen.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);
