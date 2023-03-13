new Swiper ('.reviews__swiper-container', {
    navigation: {
    nextEl: '.reviews__btn-right',
    prevEl: '.reviews__btn-left'
    },

    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    },
    
    loop: true,

    spaceBetween: 20,
    
    speed: 800
});

new Swiper ('.reviews-second__swiper-container', {
    navigation: {
    nextEl: '.reviews-second__btn-right',
    prevEl: '.reviews-second__btn-left'
    },

    pagination: {
        el: '.swiper-second-pagination',

        clickable: true,
    },
    
    loop: true,

    spaceBetween: 20,
    
    speed: 800
});