const initSwipers = () => {
    const slider = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: 4,
    });
}

initSwipers();