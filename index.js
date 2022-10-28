let page = document.querySelector('.page');
let popup = document.querySelector('.popup');
let buttonOpen = document.querySelector('.header__burger');
let buttonClose = document.querySelector('.popup__close-button');
let cbox = document.querySelectorAll(".popup__url");

for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("click", closePopup);
    };


function openPopup(){
    popup.classList.add('popup_opened');
    page.classList.add('page_overflow');
}

function closePopup(){
        popup.classList.remove('popup_opened');
        page.classList.remove('page_overflow');
}


buttonOpen.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);