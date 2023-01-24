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

buttonOpen.addEventListener("click", openPopup);
buttonClose.addEventListener("click", closePopup);

const rangeInput = document.querySelector(".form__range");
const rangeCount = document.querySelector(".form__count");
var summ = 0;
const textSumm = document.querySelector('.calculator__summa');
const type = document.querySelector('#form__type')

//Калькульятор, количество светильников
const svetPlus = document.querySelector('.control__svet-plus');
const svetMinus  = document.querySelector('.control__svet-minus');
const svetImput = document.querySelector('.input-svet');
var svetCount = 0;

svetPlus.addEventListener('click', function addCount(){
svetCount = svetCount + 1;
svetImput.value = svetCount;
summ = summ + parseInt(type.value);
textSumm.textContent = summ;
})

svetMinus.addEventListener('click', function addCount(){
  svetCount = svetCount - 1;
  svetImput.value = svetCount;
  summ = summ - parseInt(type.value);
  textSumm.textContent = summ;
})

//Калькульятор, количество люстр
const chandelierPlus = document.querySelector('.control__chandelier-plus');
const chandelierMinus  = document.querySelector('.control__chandelier-minus');
const chandelierImput = document.querySelector('.input__chandelier');
var chandelierCount = 0;


chandelierPlus.addEventListener('click', function addCountSvet(){
  chandelierCount = chandelierCount + 1;
  chandelierImput.value = chandelierCount;
  summ = summ + parseInt(type.value);
  textSumm.textContent = summ;
  })
  
chandelierMinus.addEventListener('click', function addCountChandelier(){
    chandelierCount = chandelierCount - 1;
    chandelierImput.value = chandelierCount;
    summ = summ - parseInt(type.value);
    textSumm.textContent = summ;
  })


//Калькульятор, количество углов
const seePlus = document.querySelector('.control__see-plus');
const seeMinus  = document.querySelector('.control__see-minus');
const seeImput = document.querySelector('.input-see');
var seeCount = 0;


seePlus.addEventListener('click', function addCountSee(){
  seeCount = seeCount + 1;
  seeImput.value = seeCount;
  summ = summ + parseInt(type.value);
  textSumm.textContent = summ;
  })
  
  seeMinus.addEventListener('click', function addCountSee(){
  seeCount = seeCount - 1;
  seeImput.value = seeCount;
  summ = summ - parseInt(type.value);
  textSumm.textContent = summ;
  })


//Калькульятор, количество труб
  const pipesPlus = document.querySelector('.control__pipes-plus');
  const pipesMinus  = document.querySelector('.control__pipes-minus');
  const pipesImput = document.querySelector('.input__pipes');
  var pipesCount = 0;


pipesPlus.addEventListener('click', function addCountPipes(){
  pipesCount = pipesCount + 1;
  pipesImput.value = pipesCount;
  summ = summ + 1999;
  textSumm.textContent = summ;

  var summPipes = summ;
  console.log(summPipes)
  return summPipes;
 
})
  
  pipesMinus.addEventListener('click', function addCountPipes(){
    pipesCount = pipesCount - 1;
    pipesImput.value = pipesCount;
    summ = summ - 1999;
  })


  function rangeClick(summPipes) {
    rangeCount.textContent = rangeInput.value;
    summ = parseInt(rangeCount.textContent) * type.value;
    textSumm.textContent = summ + summPipes;
    console.log(summPipes)
  }