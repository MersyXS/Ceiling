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


document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.scroll').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

buttonOpen.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);