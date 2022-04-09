let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButtons = document.querySelector('.close-popup');

openPopupButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    });
});

closePopupButtons.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target == popupBg) {
        popupBg.classList.remove('active');
    popup.classList.remove('active');
    }
});

"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
});
