import Swiper from './../libs/swiper-bundle.min.js';

export default function slider() {
    if (document.querySelector('.other-projects')) {
        const swiper = new Swiper('.swiper-projects', {
            // Переключение при клике на слайд
            slideToClickedSlide: true,
            // Управление клавиатурой
            Keyboard: {
                enabled: true, // вкл-выкл
                onlyInViewport: true, // в пределах вьюпорта
                pageUpDown: true,// управление клавиатурой
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            // Активный слайд по центру
            centerdSlides: true,
            // Бесконечный слайд
            loop: true,
            // Скорость прокрутки
            speed: 400,
            autoHeight: true,
            watchOverflow: true,
            spaceBetween: 50,
            centerdSlides: true,
            breakpoints: {
                // when window width is <= 320px
                320: {
                    autoHeight: true,
                    // Колличество слайдов для показа
                    centerdSlides: true,
                    slidesPerView: 'auto',

                },
                // when window width is <= 480px
                414: {
                    centerdSlides: true,
                    slidesPerView: 'auto',

                },
                768: {
                    centerdSlides: true,
                    slidesPerView: 'auto',

                },
                1200: {
                    centerdSlides: true,
                    slidesPerView: 3
                }
            }
        });
        let sliderBlock = document.querySelector('.swiper-projects');
        sliderBlock.addEventListener("mouseleave", function (e) {
            swiper.params.autoplay.disableOnInteraction = false;
            // swiper.params.autoplay.delay = 50;
            swiper.autoplay.start();

        });
        sliderBlock.addEventListener("mouseenter", function (e) {
            swiper.autoplay.stop();
        });
    }
}