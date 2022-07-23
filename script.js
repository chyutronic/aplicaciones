// código para usar la ventana modal

const open = document.getElementById('open');
const modal_container1 = document.getElementById('modal_container1');
const close1 = document.getElementById('close1');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close1');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close1');
const modal_container4 = document.getElementById('modal_container4');
const close4 = document.getElementById('close1');
const modal_container5 = document.getElementById('modal_container5');
const close5 = document.getElementById('close1');
const modal_container6 = document.getElementById('modal_container6');
const close6 = document.getElementById('close1');
const modal_container28 = document.getElementById('modal_container28');
const close28 = document.getElementById('close1');


// arreglo que contiene las respuestas con combinaciones posibles
let op1 = ["1", "1", "1"];
let op2 = ["2", "2", "2"];
let op3 = ["3", "3", "3"];
let op4 = ["1", "2", "3"];
let op5 = ["3", "2", "1"];
let op6 = ["1", "1", "2"];


// arreglo donde se guardan las respuestas del usuario
let opcionElegida = [];


// función que toma el número de pregunta y el imput elegido de esa pregunta
function respuesta(numPregunta, seleccionada){

    opcionElegida.splice(numPregunta,0,seleccionada.value);

}// fin método respuesta


// función que toma las respuestas y lo compara con los arreglos con combinaciones posibles y entrega el vino correcto
function consultar(){

    if(JSON.stringify(op1) === JSON.stringify(opcionElegida)){
        open.addEventListener('click', () => {
            modal_container1.classList.add('show');
        });
    }
    else if(JSON.stringify(op2) === JSON.stringify(opcionElegida)){
        open.addEventListener('click', () => {
            modal_container2.classList.add('show');
        });
    }
    else if(JSON.stringify(op3) === JSON.stringify(opcionElegida)){
        open.addEventListener('click', () => {
            modal_container3.classList.add('show');
        });
    }
    else if(JSON.stringify(op4) === JSON.stringify(opcionElegida)){
        open.addEventListener('click', () => {
            modal_container4.classList.add('show');
        });
    }
    else if(JSON.stringify(op5) === JSON.stringify(opcionElegida)){
        open.addEventListener('click', () => {
            modal_container5.classList.add('show');
        });
    }
    else if(JSON.stringify(op6) === JSON.stringify(opcionElegida)){
        open.addEventListener('click', () => {
            modal_container6.classList.add('show');
        });
    }
    else{
        open.addEventListener('click', () => {
            modal_container28.classList.add('show');
        });
    }
    
}// fin método consultar


// función para cerrar la ventana modal y reiniciar la aplicación
function cerrarVentanaModal(){

    window.scrollTo(0, 0);
    location.reload();

    // if(JSON.stringify(op1) === JSON.stringify(opcionElegida)){
    //     close1.addEventListener('click', () => {
    //         modal_container1.classList.remove('show');
    //         location.reload();
    //         window.scrollTo(0, 0);
    //     });
    // }
    // else if(JSON.stringify(op2) === JSON.stringify(opcionElegida)){
    //     close2.addEventListener('click', () => {
    //         modal_container2.classList.remove('show');
    //         location.reload();
    //         window.scrollTo(0, 0);
    //     });
    // }
    // else if(JSON.stringify(op3) === JSON.stringify(opcionElegida)){
    //     close3.addEventListener('click', () => {
    //         modal_container3.classList.remove('show');
    //         location.reload();
    //         window.scrollTo(0, 0);
    //     });
    // }
    // else if(JSON.stringify(op4) === JSON.stringify(opcionElegida)){
    //     close4.addEventListener('click', () => {
    //         modal_container4.classList.remove('show');
    //         location.reload();
    //         window.scrollTo(0, 0);
    //     });
    // }
    // else if(JSON.stringify(op5) === JSON.stringify(opcionElegida)){
    //     close5.addEventListener('click', () => {
    //         modal_container5.classList.remove('show');
    //         location.reload();
    //         window.scrollTo(0, 0);
    //     });
    // }
    // else if(JSON.stringify(op6) === JSON.stringify(opcionElegida)){
    //     close6.addEventListener('click', () => {
    //         modal_container6.classList.remove('show');
    //         location.reload();
    //         window.scrollTo(0, 0);
    //     });
    // }
    // else{
    //     close28.addEventListener('click', () => {
    //         modal_container28.classList.remove('show');
    //         location.reload();
    //         window.scrollTo(0, 0);
    //     });
    // }

}// fin función cerrar












