// ЗАПРЕТ СКРОЛА БОДИ ПРИ ОТКРЫТОМ ГАМБУРГЕРЕ
function menu() {
    let panel = document.querySelector('html');
    document.querySelector('.menu__btn').addEventListener('click', e => {
        panel.classList.toggle('no-scroll');
    });
}
export default menu;



