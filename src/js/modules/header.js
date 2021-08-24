// ФИКСИРУЕМ HEADER ПРИ СКРОЛЕ
function header() {
    window.onscroll = () => {
        let block1 = document.querySelector('.header');
        if (window.scrollY >= 130) {
            block1.classList.add('header__bottom-new');
        }
        else if (window.scrollY < 130) {
            block1.classList.remove('header__bottom-new');
        }
    };
}
export default header;




