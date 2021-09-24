// ЗАПРЕТ СКРОЛА БОДИ ПРИ ОТКРЫТОМ ГАМБУРГЕРЕ
export default function menu() {
    let panel = document.querySelector('body');
    document.querySelector('.menu__btn').addEventListener('click', e => {
        panel.classList.toggle('no-scroll');
    });
}



