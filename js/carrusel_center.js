const swiper_center= new Swiper('.swiper_center', {
    slidesPerView: "auto",
    spaceBetween: 15,
    loop:"true",

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '0'+ (index +1) + "</span>";
        },
      },
    
    navigation: {
    nextEl: '.hero_carrousel__carrousel__carrousel__content__controls__arrow--next',
    prevEl: '.hero_carrousel__carrousel__carrousel__content__controls__arrow--prev',
    },


})  