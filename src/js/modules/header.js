
// ФИКСИРУЕМ HEADER ПРИ СКРОЛЕ
export default function header() {
    const body = document.getElementsByTagName('body')[0];

    body.addEventListener('scroll', function () {
        getWindowScrollTop(this);
    });

    function getWindowScrollTop(el) {
        const stickyMenu = document.querySelector('.header');

        let cont_top = el.scrollTop ? el.scrollTop : document.body.scrollTop;

        if (cont_top >= 100) {
            stickyMenu.classList.add('fixed');
        } else {
            stickyMenu.classList.remove('fixed');
        }
    }
}





