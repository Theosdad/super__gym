const initSwipers = () => {
    const slider = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
            },
            // when window width is >= 1280px
            1200: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            }
        }
    });
}

initSwipers();