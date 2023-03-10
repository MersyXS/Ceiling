const page = document.querySelector(".page");
const popup = document.querySelector(".popup");
const buttonOpen = document.querySelector(".header__burger");
const buttonClose = document.querySelector(".popup__close-button");
const cbox = document.querySelectorAll(".popup__url");
const imageContainer = document.querySelector(".popup__img");

for (let i = 0; i < cbox.length; i++) {
  cbox[i].addEventListener("click", closePopup);
}

function openPopup() {
  popup.classList.add("popup_opened");
  page.classList.add("page_overflow");
}

function closePopup() {
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

const inputListing = document.querySelector(".form__input")
const inputList = document.querySelectorAll('.form__control_button');

const rangeInput = document.querySelector(".form__range");
const buttonDisabled = document.querySelector('.form__control-minus');

const svetPlus = document.querySelector(".control__svet-plus");
const svetMinus = document.querySelector(".control__svet-minus");
const inputSvet = document.querySelector(".input-svet");
var countSvet = 0;

const chandeliersPlus = document.querySelector(".control_chandeliers-plus");
const chandeliersMinus = document.querySelector(".control_chandeliers-minus");
const inputChandeliers = document.querySelector(".input__chandelier");
var countChandeliers = 0;

const cornerPlus = document.querySelector('.control_corner-plus');
const cornerMinus = document.querySelector('.control_corner-minus');
const inputCorner = document.querySelector('.input-corner');
var countCorner = 0;

const pipesPlus = document.querySelector('.control_pipes-plus');
const pipesMinus = document.querySelector('.control_pipes-minus');
const inputPipes = document.querySelector(".input__pipes");
var countPipes = 0;


const textRange = document.querySelector('.form__count');
const textSumm = document.querySelector('.calculator__itog');
const typeCeiling = document.querySelector(".form__type");

var summDop = 0;
var summRange = 0;
var summAll = 0;

function rangeClick() {
  if (rangeInput.value == 0) {

    inputList.forEach((inputElement) => {
      inputElement.classList.add('button_disabled');
      inputElement.disabled = true;
      inputSvet.value = "";
      inputChandeliers.value = "";
      inputCorner.value = "";
      inputPipes.value = "";
      countSvet = 0;
      countPipes = 0;
      countCorner = 0;
      countChandeliers = 0;
      summAll = 0;
      summDop = 0;
      summRange = 0;
    });
  }
  else {
    inputList.forEach((inputElement) => {
      inputElement.classList.remove('button_disabled');
      inputElement.disabled = false;
    });
  }

  textRange.textContent = rangeInput.value;
  summRange = rangeInput.value * typeCeiling.value;
  calc();
  validationButton();
}

typeCeiling.addEventListener("change", () => {
  summRange = rangeInput.value * typeCeiling.value;
  calc();
});

function svetAdd(evt) {
  evt.preventDefault();
  countSvet = countSvet + 1;
  inputSvet.value = countSvet;
  summDop += 1000;
  calc()
  validationButton()
}

function svetDelete(evt) {
  evt.preventDefault();
  countSvet = countSvet - 1;
  inputSvet.value = countSvet;
  summDop -= 1000;
  calc()
  validationButton()
}

function chandeliersAdd(evt) {
  evt.preventDefault();
  countChandeliers = countChandeliers + 1;
  inputChandeliers.value = countChandeliers;
  summDop += 1000;
  calc()
  validationButton()
}

function chandeliersDelete(evt) {
  evt.preventDefault();
  countChandeliers = countChandeliers - 1;
  inputChandeliers.value = countChandeliers;
  summDop -= 1000;
  calc()
  validationButton()
}

function cornerAdd(evt) {
  evt.preventDefault();
  countCorner = countCorner + 1;
  inputCorner.value = countCorner;
  summDop += 1000;
  calc()
  cornerMinus.disabled = false;
  cornerMinus.classList.remove('button_disabled');
  validationButton()
}

function cornerDelete(evt) {
  evt.preventDefault();
  countCorner = countCorner - 1;
  inputCorner.value = countCorner;
  summDop -= 1000;
  calc()
  validationButton()
}

function pipesAdd(evt) {
  evt.preventDefault();
  countPipes = countPipes + 1;
  inputPipes.value = countPipes;
  summDop += 1000;
  calc()
  validationButton()
}

function pipesDelete(evt) {
  evt.preventDefault();
  countPipes = countPipes - 1;
  inputPipes.value = countPipes;
  summDop -= 1000;
  calc()
  validationButton()
}


function validationButton() {
  if (countCorner < 1) {
    cornerMinus.disabled = true;
    cornerMinus.classList.add('button_disabled');
  }
  else {
    cornerMinus.disabled = false;
    cornerMinus.classList.remove('button_disabled');
  }

  if (countChandeliers < 1) {
    chandeliersMinus.disabled = true;
    chandeliersMinus.classList.add('button_disabled');
  }
  else {
    chandeliersMinus.disabled = false;
    chandeliersMinus.classList.remove('button_disabled');
  }

  if (countPipes < 1) {
    pipesMinus.disabled = true;
    pipesMinus.classList.add('button_disabled');
  }
  else {
    pipesMinus.disabled = false;
    pipesMinus.classList.remove('button_disabled');
  }

  if (countSvet < 1) {
    svetMinus.disabled = true;
    svetMinus.classList.add('button_disabled');
  }
  else {
    svetMinus.disabled = false;
    svetMinus.classList.remove('button_disabled');
  }
}

function calc() {
  var a = summRange + summDop;
  textSumm.textContent = a + " р.";
}

svetPlus.addEventListener('click', svetAdd);
svetMinus.addEventListener('click', svetDelete);
chandeliersPlus.addEventListener('click', chandeliersAdd);
chandeliersMinus.addEventListener('click', chandeliersDelete);
cornerPlus.addEventListener('click', cornerAdd);
cornerMinus.addEventListener('click', cornerDelete);
pipesPlus.addEventListener('click', pipesAdd);
pipesMinus.addEventListener('click', pipesDelete);
buttonOpen.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);
rangeClick();