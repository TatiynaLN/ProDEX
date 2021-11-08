// вызов модалки
export default function modal() {

    // с 5 строки по 17 включительно можно смело все удалять
    let panel = document.querySelector('body');
    let modal = document.querySelector('.modal-wrapper'); // .modal-wrapper обертка для всех модалок с задним фоном во весь экран
    
    let modals = document.querySelectorAll('.modal-wrapper > .modal');

    let elements = document.querySelectorAll('.btn-1'); 

    for (let elem of elements) {

        elem.addEventListener('click', e => { // .btn-1 класс кнопки по которой открывается первая форма 
            
            
            for (let modal of modals) {
                modal.classList.remove("active-modal");
            }
            document.querySelector('.modal-btn-1').classList.add("active-modal");

            panel.classList.toggle('no-scroll');
            modal.classList.toggle('modal-wrapper--open'); // добавляем этот класс .modal-wrapper--open для оберток всех модалок тогда окно откроется
        
        });
    }

      
    let elements2 = document.querySelectorAll('.btn-2'); 

    for (let elem2 of elements2) {

        elem2.addEventListener('click', e => { // .btn-1 класс кнопки по которой открывается первая форма 
            
            
            for (let modal of modals) {
                modal.classList.remove("active-modal");
            }
            document.querySelector('.modal-btn-2').classList.add("active-modal");

            panel.classList.toggle('no-scroll');
            modal.classList.toggle('modal-wrapper--open'); // добавляем этот класс .modal-wrapper--open для оберток всех модалок тогда окно откроется
        
        });
    }

    if(document.querySelector('.close')) {
        document.querySelector('.close').addEventListener('click', e => { // крестик находится в spane с классом .close по нему запланировано закрытие модалки
            panel.classList.toggle('no-scroll');
            modal.classList.toggle('modal-wrapper--open');
        });
    }
    /* сейчас этот код работает только на одной кнопке и открывает только одну модалку
    эта кнопка появляется в шапке на экранах в от 600рх до 1100рх

    btn-2
    btn-thanks
    */

}