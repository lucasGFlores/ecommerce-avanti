const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        200: {
            slidesPerView: 2,
            spaceBetween: 10,  // Menos espaço entre os slides para telas pequenas
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,  // Um pouco mais de espaço entre os slides em telas médias
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,  // Um pouco mais de espaço entre os slides em telas grandes
        }
    }
});