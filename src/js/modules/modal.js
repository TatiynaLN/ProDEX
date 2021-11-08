// вызов модалки
export default function modal() {

    // с 5 строки по 17 включительно можно смело все удалять
    let panel = document.querySelector('body');
    let modal = document.querySelector('.modal-wrapper'); // .modal-wrapper обертка для всех модалок с задним фоном во весь экран
    document.querySelector('.btn-1').addEventListener('click', e => { // .btn-1 класс кнопки по которой открывается первая форма 
        
        panel.classList.toggle('no-scroll');
        modal.classList.toggle('modal-wrapper--open'); // добавляем этот класс .modal-wrapper--open для оберток всех модалок тогда окно откроется
    
    });
    document.querySelector('.close').addEventListener('click', e => { // крестик находится в spane с классом .close по нему запланировано закрытие модалки
        panel.classList.toggle('no-scroll');
        modal.classList.toggle('modal-wrapper--open');
    });
    /* сейчас этот код работает только на одной кнопке и открывает только одну модалку
    эта кнопка появляется в шапке на экранах в от 600рх до 1100рх
    */

}