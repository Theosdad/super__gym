const video = document.querySelector('.video');
const link = document.querySelector('.video__link');
const button = document.querySelector('.video__button');
const iframe = document.getElementById('iframe');
link.removeAttribute('href');

button.addEventListener('click', () => {
    button.remove();
    link.remove();
    iframe.classList.remove('visually-hidden');
});

