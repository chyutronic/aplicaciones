// código para usar la ventana modal

const open = document.getElementById('open');
const openP0 = document.getElementById('openP0');
const openP1 = document.getElementById('openP1');
const openP2 = document.getElementById('openP2');

// const modal_container_CS = document.getElementById('modal_container_CS');
// const modal_container_ME = document.getElementById('modal_container_ME');
// const modal_container_CA = document.getElementById('modal_container_CA');
// const modal_container_SB = document.getElementById('modal_container_SB');
const modal_container28 = document.getElementById('modal_container28');

const modal_container_P0 = document.getElementById('modal_container_P0');
const modal_container_P1 = document.getElementById('modal_container_P1');
const modal_container_P2 = document.getElementById('modal_container_P2');


// arreglo que contiene las respuestas con combinaciones posibles: 3^3=27 combinaciones posibles

let op1 = ["1", "1", "1"];
let op2 = ["1", "1", "2"];
let op3 = ["1", "1", "3"];
let op4 = ["1", "2", "1"];
let op5 = ["1", "2", "2"];
let op6 = ["1", "2", "3"];
let op7 = ["1", "3", "1"];
let op8 = ["1", "3", "2"];
let op9 = ["1", "3", "3"];
let op10 = ["2", "1", "1"];
let op11 = ["2", "1", "2"];
let op12 = ["2", "1", "3"];
let op13 = ["2", "2", "1"];
let op14 = ["2", "2", "2"];
let op15 = ["2", "2", "3"];
let op16 = ["2", "3", "1"];
let op17 = ["2", "3", "2"];
let op18 = ["2", "3", "3"];
let op19 = ["3", "1", "1"];
let op20 = ["3", "1", "2"];
let op21 = ["3", "1", "3"];
let op22 = ["3", "2", "1"];
let op23 = ["3", "2", "2"];
let op24 = ["3", "2", "3"];
let op25 = ["3", "3", "1"];
let op26 = ["3", "3", "2"];
let op27 = ["3", "3", "3"];


// arreglo donde se guardan las respuestas del usuario
let opcionElegida = [];


// función que toma el número de pregunta y el imput elegido de esa pregunta
function respuesta(numPregunta, seleccionada){

    opcionElegida.splice(numPregunta,0,seleccionada.value);

}// fin método respuesta


// función para hacer aparecer las ventanas modales con las preguntas por separado
function mostrarPreguntas(){

    openP0.addEventListener('click', () => {
        modal_container_P0.classList.add('show');
    });

    openP1.addEventListener('click', () => {
        modal_container_P1.classList.add('show');
    });

    openP2.addEventListener('click', () => {
        modal_container_P2.classList.add('show');
    });

}


// función que toma las respuestas y lo compara con los arreglos con combinaciones posibles y entrega el vino correcto
function consultar(){

    // console.log(opcionElegida);

    if([JSON.stringify(op7), JSON.stringify(op8), JSON.stringify(op9), JSON.stringify(op25), JSON.stringify(op26), JSON.stringify(op27)].includes(JSON.stringify(opcionElegida))){

        window.open("opcionCS.html" , "_self" , "scrollbars=NO")

        // open.addEventListener('click', () => {
        //     modal_container_CS.classList.add('show');
        // });
    }
    else if([JSON.stringify(op13), JSON.stringify(op14), JSON.stringify(op15), JSON.stringify(op19), JSON.stringify(op20), JSON.stringify(op21), JSON.stringify(op22), JSON.stringify(op23), JSON.stringify(op24)].includes(JSON.stringify(opcionElegida))){

        window.open("opcionME.html" , "_self" , "scrollbars=NO")

        // open.addEventListener('click', () => {
        //     modal_container_ME.classList.add('show');
        // });
    }
    else if([JSON.stringify(op4), JSON.stringify(op5), JSON.stringify(op6), JSON.stringify(op16), JSON.stringify(op17), JSON.stringify(op18)].includes(JSON.stringify(opcionElegida))){
        
        window.open("opcionCA.html" , "_self" , "scrollbars=NO")

        // open.addEventListener('click', () => {
        //     modal_container_CA.classList.add('show');
        // });
    }

    else if([JSON.stringify(op1), JSON.stringify(op2), JSON.stringify(op3), JSON.stringify(op10), JSON.stringify(op11), JSON.stringify(op12)].includes(JSON.stringify(opcionElegida))){

        window.open("opcionSB.html" , "_self" , "scrollbars=NO")

        // open.addEventListener('click', () => {
        //     modal_container_SB.classList.add('show');
        // });

    }else{
        open.addEventListener('click', () => {
            modal_container28.classList.add('show');
        });
    }
    
}// fin método consultar


// función para cerrar la ventana modal y reiniciar la aplicación
function cerrarVentanaModal(){

    window.scrollTo(0, 0);
    location.reload();

}// fin función cerrar


window.onload = mostrarPreguntas;











