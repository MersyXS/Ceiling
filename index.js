let popup = document.querySelector('.popup');
let buttonOpen = document.querySelector('.header__burger');
let buttonClose = document.querySelector('.popup__close-button');

function openPopup(){
    popup.classList.add('popup_opened')
    console.log("123");
}

function closePopup(){
    popup.classList.remove('popup_opened')
    console.log("321");
}

buttonOpen.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);